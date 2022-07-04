/* eslint-disable @next/next/no-img-element */
import LayoutDefault from "../layouts/LayoutDefault";
import { useEffect, useState } from 'react'
import axios from 'axios'
import FullScreen from "../components/FullScreen";
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { message, Popconfirm } from 'antd'
import { CloseCircleOutlined, DeleteTwoTone, EyeTwoTone } from '@ant-design/icons'

export default function Index({ products }) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [dataBase, setDataBase] = useState([])

  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [precoInput, setPrecoInput] = useState('')
  const [popularityInput, setPopularityInput] = useState('')
  const [categorySearchInput, setCategorySearchInput] = useState('')
  const [linkInput, setLinkInput] = useState('')
  const [imagesInput, setImagesInput] = useState([])
  const [precoAntigoInput, setPrecoAntigoInput] = useState('')
  const [porcentagemDescontoInput, setPorcentagemDescontoInput] = useState('')
  const [numeroParcelasInput, setNumeroParcelasInput] = useState('')
  const [precoParcelasInput, setPrecoParcelasInput] = useState('')
  const [lojaInput, setlLojaInput] = useState('')
  const [semJurosInput, setSemJurosInput] = useState(false)

  const buttonsCategory = {
    avulsos: [
      { title: 'Carro', category: 'carro' },
      { title: 'Moda', category: 'moda' },
      { title: 'Cama mesa e banho', category: 'cama_mesa_e_banho' },
      { title: 'Carro', category: 'carro' },
      { title: 'Carro', category: 'carro' },
      { title: 'Moda', category: 'moda' },
      { title: 'Cama mesa e banho', category: 'cama_mesa_e_banho' },
      { title: 'Carro', category: 'carro' },
      { title: 'Carro', category: 'carro' },
      { title: 'Moda', category: 'moda' },
      { title: 'Cama mesa e banho', category: 'cama_mesa_e_banho' },
      { title: 'Carro', category: 'carro' },
      { title: 'Carro', category: 'carro' },
      { title: 'Moda', category: 'moda' },
      { title: 'Cama mesa e banho', category: 'cama_mesa_e_banho' },
      { title: 'Carro', category: 'carro' },
    ],
    lojas: [
      { title: 'Shopee', category: 'Shopee' },
      { title: 'Magazine luiza', category: 'magazine_luiza' },
      { title: 'Lojas Americanas', category: 'lojas_americanas' },
    ]
  }

  function addCategory(category, idButton) {
    const input = document.getElementById('categoriaDeBusca')
    input.value = input.value + category + ' '

    const button = document.querySelector(`.button-add-category-${idButton}`)
    button.style.backgroundColor = '#198754'
    setTimeout(() => {
      button.style.backgroundColor = '#3498db'
    }, 300);

    setCategorySearchInput(input.value)
  }

  async function getProducts() {
    const dev = process.env.NODE_ENV !== 'production'
    const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
    const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
    await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get`).then((res) => {
      setDataBase(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect( () => {
    if (localStorage.getItem('acesso') === 'true') {
      localStorage.setItem('acesso', true)
      getProducts()
    } else if (localStorage.getItem('acesso') !== 'true') {
      alert('usuário não autenticado')
      router.push('/login')
    }

    // return () => {
    //   setTimeout(() => {
    //     localStorage.clear()
    //   }, 1500);
    // }
  }, []);

  async function itemPush(e) {
    e.preventDefault()

    const product = {
      id: Date.now(),
      name: nameInput,
      description: descriptionInput,
      preco: precoInput,
      popularity: popularityInput,
      categorySearch: categorySearchInput,
      link: linkInput,
      images: imagesInput,
      url: imagesInput.url,
      alt: imagesInput.alt,
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
    }).then((res) => {
      setShowModal(false)
      setImagesInput([])
      setNameInput('')
      setDescriptionInput('')
      setPrecoInput('')
      setPopularityInput('')
      setCategorySearchInput('')
      setLinkInput('')
      setPrecoAntigoInput('')
      setPorcentagemDescontoInput('')
      setNumeroParcelasInput('')
      setPrecoParcelasInput('')
      setlLojaInput('')
      setSemJurosInput(false)
      message.success({
        content: 'Produto adicionado com sucesso',
        duration: 2,
        style: {
          marginTop: '30px'
        }
      })
      getProducts()
    }).catch((err) => {
      console.log(err)
    })
  }

  async function deleteProduct (id) {
    const dev = process.env.NODE_ENV !== 'production'
    const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
    const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
    axios.post(`${dev ? DEV_URL : PROD_URL}/api/products/delete`, JSON.stringify(id), {
      headers:{
        "Content-Type": "application/json"
      }
    }).then((res) => {
      message.error({
        content: 'Produto removido com sucesso',
        duration: 2,
        style: {
          marginTop: '30px'
        }
      })
      getProducts()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <LayoutDefault noHeader={true}>
        <section id="admin">
          <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>Imagem</th>
                <th>Id</th>
                <th>Nome do produto</th>
                <th>Desconto</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
              </thead>
              <tbody>
                {
                  dataBase.map((item, index) => {
                    return(
                      <tr key={index}>
                        <td>
                          {
                            item.images.length > 0 ?
                            <img 
                              src={item.images[0].url}
                              style={{ 
                                height: '60px',
                                width: '60px',
                                objectFit: 'cover'
                              }}
                              height={100}
                              width={100}
                              alt={item.images[0].alt}
                            /> :
                            null
                          }
                        </td>
                        <td>#{ item.id }</td>
                        <td>{ item.name }</td>
                        <td>{ item.porcentagemDesconto }</td>
                        <td>{ item.preco }</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Popconfirm
                              icon={<CloseCircleOutlined  style={{ color: 'red' }} />}
                              title="Deseja excluir esse produto?"
                              placement="left"
                              onConfirm={() => deleteProduct(item.id)}
                              okText="Excluir"
                              cancelText="Cancelar"
                              onVisibleChange={() => console.log('visible change')}
                            >
                              <DeleteTwoTone style={{ fontSize: '24px' }} twoToneColor="red" />
                            </Popconfirm>
                            <Link href={{ pathname: 'products/view/[id]', query: { id: item.id} }}>
                              <a
                                style={{
                                  height: '40px',
                                  width: '40px',
                                  borderRadius: '50%', 
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginLeft: '3px'
                                }}
                              >
                                <EyeTwoTone style={{ fontSize: '24px' }} />
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    )
                  }
                )}
              </tbody>
          </table>
          <button className="btn btn-success" onClick={() => { setShowModal(true) }}>
            Adicionar produto
          </button>
          <CSSTransition
            in={showModal}
            timeout={300}
            classNames={{
              enter: 'alert-enter',
              enterActive: 'alert-enter-active',
              exit: 'alert-exit',
              exitActive: 'alert-exit-active',
            }}
            unmountOnExit
          >
            <FullScreen>
              <div className="content-full-screen">
                <form onSubmit={itemPush} action="" onClick={(e) => {e.stopPropagation()}}>
                  { /** Inputs de texto */ }
                  <input type="text" className="form-control" placeholder="Nome" onChange={(e) => { setNameInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Descrição" onChange={(e) => { setDescriptionInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço" onChange={(e) => { setPrecoInput(e.target.value) }} />
                  <input type="number" className="form-control" placeholder="Popularidade" onChange={(e) => { setPopularityInput(e.target.value) }} />
                  <textarea type="text" id="categoriaDeBusca" rows={3} className="form-control" placeholder="Categorias de busca" onChange={(e) => { setCategorySearchInput(e.target.value) }} />
                  <span className="d-block mt-3">
                    <b>Avulsos:</b>
                  </span>
                  <hr className="mt-1 mb-2" />
                  {
                    buttonsCategory.avulsos.map((item, index) => {
                      return(
                        <button
                          key={index}
                          className={`button-add-category-${index} me-2 px-2 small py-1 rounded bg-blue text-white`}
                          style={{ marginBottom: '5px', marginTop: '5px', transition: 'all .2s' }}
                          onClick={(e) => { e.preventDefault(); addCategory(item.category, index) }}
                        >
                          { item.title }
                        </button>
                      )
                    })
                  }
                  <span className="d-block mt-3">
                    <b>Lojas:</b>
                  </span>
                  <hr className="mt-1 mb-2" />
                  {
                    buttonsCategory.lojas.map((item, index) => {
                      return(
                        <button
                          key={index}
                          className={`button-add-category-${buttonsCategory.avulsos.length + index} me-2 px-2 small py-1 rounded bg-blue text-white`}
                          style={{ marginBottom: '5px', marginTop: '5px', transition: 'all .2s' }}
                          onClick={(e) => { e.preventDefault(); addCategory(item.category, buttonsCategory.avulsos.length + index) }}
                        >
                          { item.title }
                        </button>
                      )
                    })
                  }
                  <input type="text" className="form-control mt-5" placeholder="Link de afiliado" onChange={(e) => { setLinkInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço antigo" onChange={(e) => { setPrecoAntigoInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Porcentagem de desconto" onChange={(e) => { setPorcentagemDescontoInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Número de parcelas" onChange={(e) => { setNumeroParcelasInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço das parcelas" onChange={(e) => { setPrecoParcelasInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Loja vendedora" onChange={(e) => { setlLojaInput(e.target.value) }} />
                  <div className="d-flex align-items-center" onClick={(e) => { setSemJurosInput(!semJurosInput) }}>
                    <input type="checkbox" checked={semJurosInput} id="check-sem-juros" className="mt-2" />
                    <label htmlFor="#check-sem-juros" className="ms-2">Sem juros?</label>
                  </div>

                  { /** Lista de imagens */ }
                  <span className="d-block mt-4">
                    Imagens: {imagesInput.length}
                  </span>
                  <hr className="mt-1 mb-4" />
                  { imagesInput.map((item, index) => {
                      return(
                        <div key={index}>
                          {
                            imagesInput.length > 0 &&
                            <div className="d-flex mt-4">
                              <img src={item.url} style={{ height: '60px', width: '60px', objectFit: 'cover' }} height={100} width={100} alt={item.alt} />
                              <div className="mx-3 col small" style={{ wordBreak: 'break-word' }}>
                                <b>N°:</b> {index + 1} <br />
                                <b>Link:</b> {item.url} <br />
                                <b>Alt:</b> {item.alt}
                              </div>
                              <button
                                className="btn focus-no-shadow align-self-center ms-auto p-0"
                                title="Excluir"
                                aria-label="Excluir"
                                style={{
                                  height: '40px',
                                  width: '40px',
                                  borderRadius: '50%', 
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                                onClick={(e) => {
                                  e.preventDefault()
                                  imagesInput.splice(index, 1)
                                  setImagesInput(oldArray => [...oldArray])
                                }}
                              >
                                <DeleteTwoTone style={{ fontSize: '24px' }} twoToneColor="red" />
                              </button>
                            </div>
                          }
                        </div>
                      )
                  })}

                  { /** Form de imagens */ }
                  <input
                    type="text" id="input-url"
                    className="form-control mt-4"
                    placeholder="Url da imagem"
                  />
                  <input
                    type="text" id="input-alt"
                    className="form-control"
                    placeholder="Alt da imagem"
                  />
                  <button
                    className="btn btn-sm btn-success"
                    onClick={(e) => {
                      e.preventDefault()
                      setImagesInput(oldArray =>
                        [ ...oldArray,
                          {
                            url: document.getElementById('input-url').value,
                            alt: document.getElementById('input-alt').value
                          }
                        ]
                      )
                      setTimeout(() => {
                        document.getElementById('input-alt').value = ''
                        document.getElementById('input-url').value = ''
                      }, 300);
                    }}
                  >
                    Add Image
                  </button>
                  <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="btn btn-success">
                      Adicionar
                    </button>
                    <button className="btn btn-danger ms-3" onClick={(e) => { e.preventDefault(), setShowModal(false) }}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </FullScreen>
          </CSSTransition>
        </section>
      </LayoutDefault>
    </>
  )
}
