import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from 'libs/server/withHandler';

export default withHandler('POST', (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  res.json({
    status: 'ok',
  });
});
