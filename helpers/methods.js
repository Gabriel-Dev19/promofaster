import axios from 'axios'
import { formattedURL } from './formattedURL'

export async function pushMethod( nameInput, descriptionInput, precoInput, popularityInput, categorySearchInput, linkInput, imagesInput, precoAntigoInput, porcentagemDescontoInput, numeroParcelasInput, precoParcelasInput, lojaInput, semJurosInput, thenMethod ) {
  const uniqueId = Date.now()
  const product = {
    id: uniqueId,
    name: nameInput,
    description: descriptionInput,
    preco: precoInput,
    popularity: popularityInput,
    categorySearch: categorySearchInput,
    link: linkInput,
    images: imagesInput,
    precoAntigo: precoAntigoInput,
    porcentagemDesconto: porcentagemDescontoInput,
    numeroParcelas: numeroParcelasInput,
    precoParcelas: precoParcelasInput,
    loja: lojaInput,
    slug: formattedURL(nameInput) + '-' + uniqueId,
    semJuros: semJurosInput
  }
  
  const dev = process.env.NODE_ENV !== 'production'
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/create?NEXT_PUBLIC_API_KEY_METHOD_POST=${process.env.NEXT_PUBLIC_API_KEY_METHOD_POST}`, JSON.stringify(product), {
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
  axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/delete?NEXT_PUBLIC_API_KEY_METHOD_DELETE=${process.env.NEXT_PUBLIC_API_KEY_METHOD_DELETE}`, JSON.stringify(id), {
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(thenMethod)
  .catch((err) => {
    console.log(err)
  })
}

export async function updateMethod ( idUpdate, nameInputUpdate, descriptionInputUpdate, precoInputUpdate, popularityInputUpdate, categorySearchInputUpdate, linkInputUpdate, imagesInputUpdate, precoAntigoInputUpdate, porcentagemDescontoInputUpdate, numeroParcelasInputUpdate, precoParcelasInputUpdate, lojaInputUpdate, semJurosInputUpdate, thenMethod ) {
  const dev = process.env.NODE_ENV !== 'production'
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/update?NEXT_PUBLIC_API_KEY_METHOD_UPDATE=${process.env.NEXT_PUBLIC_API_KEY_METHOD_UPDATE}`, JSON.stringify({
    id: idUpdate,
    name: nameInputUpdate,
    description: descriptionInputUpdate,
    preco: precoInputUpdate,
    popularity: popularityInputUpdate,
    categorySearch: categorySearchInputUpdate,
    link: linkInputUpdate,
    images: imagesInputUpdate,
    precoAntigo: precoAntigoInputUpdate,
    porcentagemDesconto: porcentagemDescontoInputUpdate,
    numeroParcelas: numeroParcelasInputUpdate,
    precoParcelas: precoParcelasInputUpdate,
    loja: lojaInputUpdate,
    slug: formattedURL(nameInputUpdate) + '-' + idUpdate,
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