import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export const withHandler = function (
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return function (req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    if (req.method !== method) {
      res.status(403).json({ ok: false });
    }
    try {
      return handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ ok: false, error });
    }
  };
};
