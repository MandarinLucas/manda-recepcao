import { PrismaClient } from '@prisma/client';
import mandrill from 'mandrill-api';

import htmlTemplateGenerator from '../../utils/message-template';

const mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_KEY);

const prisma = new PrismaClient();

const arrived = async (req, res) => {
  await prisma.$connect()
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.json({ error: `This endpoint do not receive ${req.method} request` });
    await prisma.$disconnect()
    return res;
  }

  const { nome, email, perfil, celular, aceite, quemvisitou } = req.body;
  console.log(req.body);

  let quemVisitouEmail 
  try {
    await prisma.visitantes.create({
      data: {
        nome,
        email,
        perfil,
        celular,
        aceite,
        quemvisitou,
        data: new Date(),
        hora: new Date()
      }
    });

    const user = await prisma.usuarios.findFirst({
      where: {
        nome_usuario: quemvisitou
      }
    });

    quemVisitouEmail = user
  } catch (err) {
    res.statusCode = 400;
    res.json({ error: `Error to record data to database - ${err}` });
    console.log(err);
    await prisma.$disconnect()
    return res;
  }

  const htmlMessage = htmlTemplateGenerator(nome, quemVisitouEmail.nome_usuario, perfil);
  const subject = `Reunião com ${nome} (${perfil})`;

  const message = {
    "html": htmlMessage,
    "text": "Olá Mundo",
    "subject": subject,
    "from_email": 'apoio@mandarin.com.br',
    "from_name": 'Apoio Mandarin - Recepção',
    "to": [
      {
        "email": quemVisitouEmail.email_usuario,
        "name": quemVisitouEmail.nome_usuario,
        "type": 'to'
      },
    ]
  };
  
  const async = false;
  const ip_pool = 'Main Pool';
  const send_at = new Date();

  //const messageJSON = JSON.stringify(message)
  await prisma.$disconnect()

  mandrillClient.messages.send(
    {
      "message": message,
      "async": async,
      "ip_pool": ip_pool,
      "send_at": send_at
    },
    function(result) {
      console.log("result", result);
      res.statusCode = 201;
      res.json({ message: `Email enviado com sucesso.` });
      return res;
    },
    function(err) {
      res.statusCode = 400;
      res.json({ error: `Error to send e-mail - ${err.message}` });
      console.log(err);
      return res;
    }
  );
  return
};

export default arrived;
