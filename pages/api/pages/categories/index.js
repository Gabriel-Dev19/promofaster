import categoriesDatabase from "../../db/pages/categoriesDataBase";

export default async function handle (req, res) {
  res.json(categoriesDatabase())
}