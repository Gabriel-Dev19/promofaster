import prisma from './db'

export async function getProductsDB() {
  return prisma.public_products.findMany()
}

export async function getUniqueProductDB(id) {
  return prisma.public_products.findUnique({
    where: {
      id: id
    }
  })
}

export async function createProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, semJuros) {
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
      loja,
      semJuros
    }
  })
}

export async function updateProductDB( id, name, description, preco, popularity, categorySearch, link, images, precoAntigo, porcentagemDesconto, numeroParcelas, precoParcelas, loja, semJuros) {
  return prisma.public_products.update({
    where: {
      id: id
    },
    data: {
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
      loja,
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