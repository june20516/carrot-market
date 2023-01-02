import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
import client from 'libs/server/client';
import { ResponseType, withHandler } from 'libs/server/withHandler';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export default withHandler('POST', async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const { email, phoneNumber } = req.body;
  const userInfo = {
    ...(email && { email }),
    ...(phoneNumber && { phoneNumber: parseInt(phoneNumber) }),
  };
  if (!(userInfo.email || userInfo.phoneNumber))
    return res.status(400).json({ ok: false, error: 'Required Info is not offered.' });

  const tokenPayload = Math.round(Math.random() * 1000000).toString();
  const token = await client.userToken
    .create({
      data: {
        payload: tokenPayload,
        user: {
          connectOrCreate: {
            where: userInfo,
            create: { name: 'Carrotie', ...userInfo },
          },
        },
      },
    })
    .catch((error: any) => {
      console.log(error);
      return res.status(500).json({ ok: false, error });
    });
  if (token && (await client.user.findFirst({ where: { tokens: {some: token} } }))?.phoneNumber) {
    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
      to: process.env.TWILIO_TEST_PHONE_NUMBER!, // actually, `token.user.phoneNumber`
      body: `Your verification token is : ${token.payload}`,
    });
  }
  return res.json({
    ok: true,
  });
});
