import { PrismaClient } from "@prisma/client";
import moment from "moment";
import mandrill from "mandrill-api";

import htmlTemplateGenerator from "../../utils/message-template";

const mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_KEY);

const prisma = new PrismaClient();

export const arrived = async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.json({ error: `This endpoint do not receive ${req.method} request` });
    return res;
  }

  const { nome, email, perfil, celular, aceite, quemvisitou } = req.body;

  let quemVisitouEmail = "";
  try {
    await prisma.visitantes.create({
      data: {
        nome,
        email,
        perfil,
        celular,
        aceite,
        quemvisitou,
        data: moment().format("YYYY-MM-DD"),
        hora: moment().format("hh:mm:ss"),
      },
    });

    const user = await prisma.usuarios.findUnique({
      where: {
        nome_usuario: quemvisitou,
      },
    });

    quemVisitouEmail = user.email_usuario;
  } catch (err) {
    res.statusCode = 405; //verificar código
    res.json({ error: `Error to record data to database - ${err}` });
    console.log(err);
    return res;
  }

  const htmlMessage = htmlTemplateGenerator(nome, quemvisitou, perfil);
  const subject = `Reunião com ${nome} (${perfil})`;

  const message = {
    html: htmlMessage,
    subject,
    from_email: "apoio@mandarin.com.br",
    from_name: "Apoio Mandarin - Recepção",
    to: [
      {
        email: "luiz.verissimo@mandarin.com.br",
        name: "Luiz Fernando Verissimo",
        type: "to",
      },
    ],
  };

  const async = false;
  const ip_pool = "Main Pool";
  const send_at = "example send_at";

  mandrillClient.messages.send(
    {
      message: JSON.stringify(message),
      async: async,
      ip_pool: ip_pool,
      send_at: send_at,
    },
    (res) => {
      console.log(res);
      res.statusCode = 200;
      res.json({ message: `Alerta enviado com sucesso.` });
      return res;
    },
    (err) => {
      res.statusCode = 405; //verificar código
      res.json({ error: `Error to send e-mail - ${err}` });
      console.log(err);
      return res;
    }
  );
};
