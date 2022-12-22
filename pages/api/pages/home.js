import homeDatabase from "../db/homeDatabase"

export default async function handle (req, res) {
  res.json(homeDatabase())
}