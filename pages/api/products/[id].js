import { getUniqueProductDB } from '../db/methods'

export default async function handle (req, res) {
  const getUniqueProduct = await getUniqueProductDB(Number(req.query.id))
  res.json(getUniqueProduct)
}