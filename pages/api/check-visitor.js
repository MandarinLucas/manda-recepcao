import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const checkVisitor = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.json({ error: `This endpoint do not receive ${req.method} request` });
    return res;
  }

  const { email } = req.body

  try {
    const visitor = await prisma.visitantes.findFirst({
      where: {
        email: email
      }
    })

    if (visitor) {
      res.statusCode = 200;
      res.json({visitor, registered: true })
      return res
    }

    if(!visitor) {
      res.statusCode = 200;
      res.json({registered: false })
      return res
    }

  } catch(err) {
    res.statusCode = 400;
    res.json({ error: `Error to access the database - ${err}` });
    console.log(err);
    return res;
  }


};

export default checkVisitor;
