import type { NextApiRequest, NextApiResponse } from 'next'
import type { DefaultResponseMsg } from '@/types/DefaultResponse'
import type { CreateUserRequest } from '@/types/CreateUserRequest'

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const signupHandler = (
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponseMsg>
) => {
  if (req.method === 'POST') {
    const userRequest = req.body as CreateUserRequest
    if (!userRequest.name || userRequest.name.length < 2) {
      return res.status(404).json({ error: 'Invalid User Name' })
    }
    if (!userRequest.email || !isValidEmail(userRequest.email)) {
      return res.status(404).json({ error: 'Invalid E-mail' })
    }
    if (userRequest.password.length < 4) {
      return res.status(404).json({ error: 'Invalid Password' })
    }

    return res
      .status(200)
      .json({ msg: `User ${userRequest.name} successfully registered` })
  }
  return res.status(405).json({ error: 'Unsupported Method' })
}

export default signupHandler
