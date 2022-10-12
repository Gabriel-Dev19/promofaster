import { updateProductDB } from '../db/methods'

export default async function handle(req, res) {
  if ((req.query.NEXT_PUBLIC_API_KEY_METHOD_UPDATE !== process.env.NEXT_PUBLIC_API_KEY_METHOD_UPDATE)) {
    console.error('Você não tem essa permissão!')
  } else {
    const { id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, slug, semJuros } = req.body
    const updateProduct = await updateProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, slug, semJuros)
    res.json(updateProduct)
  }
}