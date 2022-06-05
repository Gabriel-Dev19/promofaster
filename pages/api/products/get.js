import { getProductsDB } from '../db/methods'

export default async function handle (req, res) {
  const getProducts = await getProductsDB()
  res.json(getProducts)
}