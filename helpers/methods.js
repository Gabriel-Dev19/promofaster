import axios from 'axios'

export async function pushMethod( nameInput, descriptionInput, precoInput, popularityInput, categorySearchInput, linkInput, imagesInput, url, alt, precoAntigoInput, porcentagemDescontoInput, numeroParcelasInput, precoParcelasInput, lojaInput, semJurosInput, thenMethod ) {
  const product = {
    id: Date.now(),
    name: nameInput,
    description: descriptionInput,
    preco: precoInput,
    popularity: popularityInput,
    categorySearch: categorySearchInput,
    link: linkInput,
    images: imagesInput,
    url: url,
    alt: alt,
    precoAntigo: precoAntigoInput,
    porcentagemDesconto: porcentagemDescontoInput,
    numeroParcelas: numeroParcelasInput,
    precoParcelas: precoParcelasInput,
    loja: lojaInput,
    semJuros: semJurosInput
  }
  
  const dev = process.env.NODE_ENV !== 'production'
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/create`, JSON.stringify(product), {
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(thenMethod)
  .catch((err) => {
    console.log(err)
  })
}

export async function deleteMethod (id, thenMethod) {
  const dev = process.env.NODE_ENV !== 'production'
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/delete`, JSON.stringify(id), {
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(thenMethod)
  .catch((err) => {
    console.log(err)
  })
}

export async function updateMethod ( idUpdate, nameInputUpdate, descriptionInputUpdate, precoInputUpdate, popularityInputUpdate, categorySearchInputUpdate, linkInputUpdate, imagesInputUpdate, url, alt, precoAntigoInputUpdate, porcentagemDescontoInputUpdate, numeroParcelasInputUpdate, precoParcelasInputUpdate, lojaInputUpdate, semJurosInputUpdate, thenMethod ) {
  const dev = process.env.NODE_ENV !== 'production'
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/update`, JSON.stringify({
    id: idUpdate,
    name: nameInputUpdate,
    description: descriptionInputUpdate,
    preco: precoInputUpdate,
    popularity: popularityInputUpdate,
    categorySearch: categorySearchInputUpdate,
    link: linkInputUpdate,
    images: imagesInputUpdate,
    url: url,
    alt: alt,
    precoAntigo: precoAntigoInputUpdate,
    porcentagemDesconto: porcentagemDescontoInputUpdate,
    numeroParcelas: numeroParcelasInputUpdate,
    precoParcelas: precoParcelasInputUpdate,
    loja: lojaInputUpdate,
    semJuros: semJurosInputUpdate
  }), {
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(thenMethod)
  .catch((err) => {
    console.log(err)
  })
}