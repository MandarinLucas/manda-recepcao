import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const indexPerfis = async(req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.json({ error: `This endpoint do not receive ${req.method} request` });
    return res;
  }

  try {
    const perfis = await prisma.perfis.findMany()

    res.statusCode = 200;
    res.json(perfis)
    return res;

  } catch(err) {
    res.statusCode = 400;
    res.json({ error: `Error to access the database - ${err}` });
    console.log(err);
    return res;
  }

}

export default indexPerfis;