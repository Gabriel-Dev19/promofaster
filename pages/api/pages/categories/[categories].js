import categoriesDatabase from "../../db/pages/categoriesDataBase"

export default async function handle (req, res) {
  const getUniqueProduct = categoriesDatabase().find(el => el.slug === String(req.query.categories))
  res.json(getUniqueProduct)
}