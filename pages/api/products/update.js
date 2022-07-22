import { updateProductDB } from '../db/methods'

export default async function handle(req, res) {
  if (process.env.NEXT_PUBLIC_API_KEY !== 'FCdjakJOq6yRXCEr0L1a9JnFrNmM5UkjDqIM4pTvplFNIODl8vuIXzfEc') {
    console.error('Você não tem essa permissão!')
  } else {
    const { id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, semJuros } = req.body
    const updateProduct = await updateProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, semJuros)
    res.json(updateProduct)
  }
}