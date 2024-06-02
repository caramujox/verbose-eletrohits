import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {login, senha} = req.body
    if (login === 'admin@admin.com' && 
        senha === 'Admin@123'
    ){
      res.status(200).json({error: 'Usuário logado com sucesso!'})
    }
    return res.status(400).json({error: 'Usuário ou senha inválidos.'})
  }
  return res.status(405).json({ error: 'Metodo informado nao é valido' })
}
