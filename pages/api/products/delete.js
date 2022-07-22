import { deleteProductDB } from '../db/methods'

export default async function handle (req, res) {
  if (process.env.NEXT_PUBLIC_API_KEY !== 'FCdjakJOq6yRXCEr0L1a9JnFrNmM5UkjDqIM4pTvplFNIODl8vuIXzfEc') {
    console.error('Você não tem essa permissão!')
  } else {
    const deleteProduct = await deleteProductDB(req.body)
    res.json(deleteProduct)
  }
}