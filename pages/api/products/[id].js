import { getUniqueProductDB } from '../db/methods'

export default async function handle (req, res) {
  const getProducts = await getUniqueProductDB(req.query)
  res.json(getProducts)
}