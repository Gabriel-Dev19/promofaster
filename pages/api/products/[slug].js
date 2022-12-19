import database from "../db/database"

export default async function handle (req, res) {
  if (req.query.NEXT_PUBLIC_API_KEY_METHOD_GET !== process.env.NEXT_PUBLIC_API_KEY_METHOD_GET) {
    console.error('Você não tem essa permissão!')
  } else {
    const getUniqueProduct = database().find(el => el.slug === String(req.query.slug))
    res.json(getUniqueProduct)
  }
}