import { getUniqueProductDB } from '../db/methods'

export default async function handle (req, res) {
  if (process.env.NEXT_PUBLIC_API_KEY !== 'FCdjakJOq6yRXCEr0L1a9JnFrNmM5UkjDqIM4pTvplFNIODl8vuIXzfEc') {
    console.error('Deixe de ser gaiato kkk você não tem essa permissão!')
  } else {
    const getUniqueProduct = await getUniqueProductDB(Number(req.query.id))
    res.json(getUniqueProduct)
  }
}