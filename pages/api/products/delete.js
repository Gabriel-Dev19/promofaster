import { deleteProductDB } from '../db/methods'

export default async function handle (req, res) {
  if ((req.query.NEXT_PUBLIC_API_KEY_METHOD_DELETE !== process.env.NEXT_PUBLIC_API_KEY_METHOD_DELETE)) {
    console.error('Você não tem essa permissão!')
  } else {
    const deleteProduct = await deleteProductDB(req.body)
    res.json(deleteProduct)
  }
}