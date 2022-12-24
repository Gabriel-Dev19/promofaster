import homeDatabase from "../db/pages/homeDatabase"

export default async function handle (req, res) {
  res.json(homeDatabase())
}