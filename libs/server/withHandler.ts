import { NextApiRequest, NextApiResponse } from 'next';

export default function (
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(403);
    }
    try {
      handler(req, res);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
