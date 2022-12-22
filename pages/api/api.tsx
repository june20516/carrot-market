import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/server/client';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    status: 'ok',
  });
}
