import { updateProductDB } from '../db/methods'

export default async function handle(req, res) {
  const { id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, semJuros } = req.body
  const updateProduct = await updateProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, semJuros)
  res.json(updateProduct)
}