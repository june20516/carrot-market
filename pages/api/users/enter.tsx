import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from 'libs/server/withHandler';
import client from 'libs/server/client';

export default withHandler('POST', async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, phoneNumber } = req.body;
  const payload = {
    ...(email && { email }),
    ...(phoneNumber && { phoneNumber: parseInt(phoneNumber) }),
  };
  const user = await client.user.upsert({ where: payload, create: { name: 'Carrotie', ...payload }, update: {} });
  res.json({
    user: user,
  });
});
