import { getProductsDB } from '../db/methods'

export default async function handle (req, res) {
  if (process.env.NEXT_PUBLIC_API_KEY !== 'FCdjakJOq6yRXCEr0L1a9JnFrNmM5UkjDqIM4pTvplFNIODl8vuIXzfEc') {
    console.error('Você não tem essa permissão!')
  } else {
    const getProducts = await getProductsDB()
    res.json(getProducts)
  }
}