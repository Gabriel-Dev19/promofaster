import { prisma } from './db'

export async function getProductsDB() {
  return prisma.public_products.findMany()
}

export async function createProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, semJuros) {
  return prisma.public_products.create({
    data: {
      id,
      name,
      description,
      preco,
      popularity,
      categorySearch,
      link,
      images,
      precoAntigo,
      porcentagemDesconto,
      numeroParcelas,
      precoParcelas,
      semJuros
    }
  })
}

export async function deleteProductDB(id) {
  return prisma.public_products.delete({
    where: {
      id: id
    }
  })
}