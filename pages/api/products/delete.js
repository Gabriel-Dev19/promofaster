import { deleteProductDB } from '../db/methods'

export default async function handle (req, res) {
  const deleteProduct = await deleteProductDB(req.body)
  res.json(deleteProduct)
}