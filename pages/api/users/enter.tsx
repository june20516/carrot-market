import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from 'libs/server/withHandler';

export default withHandler('POST', (req: NextApiRequest, res: NextApiResponse) => {
  const { email, phoneNumber } = req.body;

  res.json({
    status: 'ok',
  });
});
