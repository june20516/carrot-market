import { NextApiRequest, NextApiResponse } from 'next';

export default function (
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(403).end();
    }
    try {
      return handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  };
}
