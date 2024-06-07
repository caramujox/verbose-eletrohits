import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '../../middlewares/connect-db'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { login, senha } = req.body
    if (login === 'admin@admin.com' && senha === 'Admin@123') {
      res.status(200).json({ error: 'Successfully logged in!' })
    }
    return res.status(400).json({ error: 'Failed to log in.' })
  }
  return res.status(405).json({ error: 'Unsupported Method' })
}
export default connectMongoDB(handler)
