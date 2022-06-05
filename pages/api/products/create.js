import { createProductDB } from '../db/methods'

export default async function handle(req, res) {
  const { id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, semJuros } = req.body
  const createProduct = await createProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, semJuros)
  res.json(createProduct)
}