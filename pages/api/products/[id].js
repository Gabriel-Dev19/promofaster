import { getUniqueProductDB } from '../db/methods'

export default async function handle (req, res) {
  if (req.query.NEXT_PUBLIC_API_KEY !== process.env.NEXT_PUBLIC_API_KEY) {
    console.error('Deixe de ser gaiato kkk você não tem essa permissão!')
  } else {
    const getUniqueProduct = await getUniqueProductDB(Number(req.query.id))
    res.json(getUniqueProduct)
  }
}