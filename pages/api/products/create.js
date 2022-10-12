import { createProductDB } from '../db/methods'

export default async function handle(req, res) {
  if ((req.query.NEXT_PUBLIC_API_KEY_METHOD_POST !== process.env.NEXT_PUBLIC_API_KEY_METHOD_POST)) {
    console.error('Você não tem essa permissão!')
  } else {
    const { id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, slug, semJuros } = req.body
    const createProduct = await createProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, slug, semJuros)
    res.json(createProduct)
  }
}