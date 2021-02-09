import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const indexHost = async(req, res) => {
  await prisma.$connect()
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.json({ error: `This endpoint do not receive ${req.method} request` });
    await prisma.$disconnect()
    return res;
  }

  try {
    const hosts = await prisma.usuarios.findMany()

    res.statusCode = 200;
    res.json(hosts)
    await prisma.$disconnect()
    return res;

  } catch(err) {
    res.statusCode = 400;
    res.json({ error: `Error to access the database - ${err}` });
    console.log(err);
    await prisma.$disconnect()
    return res;
  }

}

export default indexHost;