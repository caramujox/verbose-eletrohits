import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '../../middlewares/connect-db'
import type { DefaultResponseMsg } from '../../types/DefaultResponse'

const loginHandler = (
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponseMsg>
) => {
  if (req.method === 'POST') {
    const { login, senha } = req.body
    if (login === 'admin@admin.com' && senha === 'Admin@123') {
      res.status(200).json({ msg: 'Successfully logged in!' })
    }
    return res.status(400).json({ error: 'Failed to log in.' })
  }
  return res.status(405).json({ error: 'Unsupported Method' })
}
export default connectMongoDB(loginHandler)
