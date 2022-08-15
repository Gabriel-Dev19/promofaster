/* eslint-disable @next/next/no-img-element */
import LayoutDefault from "../layouts/LayoutDefault";
import { useEffect, useState } from 'react'
import axios from 'axios'
import FullScreen from "../components/parts/FullScreen";
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { message } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { isAuthFalse } from "../redux/authLogin";
import { pushMethod, updateMethod } from "../helpers/methods";
import TableAdmin from "../components/parts/TableAdmin";
import useBus from "use-bus";

export default function Index({ response, children }) {
  // Dados gerais
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [dataBase, setDataBase] = useState([])
  const state = useSelector(state => state)
  const dispath = useDispatch()

  // Dados usados para o formulário de update
  const [idUpdate, setIdUpdate] = useState(0)
  const [nameInputUpdate, setNameInputUpdate] = useState('')
  const [descriptionInputUpdate, setDescriptionInputUpdate] = useState('')
  const [precoInputUpdate, setPrecoInputUpdate] = useState('')
  const [popularityInputUpdate, setPopularityInputUpdate] = useState('')
  const [categorySearchInputUpdate, setCategorySearchInputUpdate] = useState('')
  const [linkInputUpdate, setLinkInputUpdate] = useState('')
  const [imagesInputUpdate, setImagesInputUpdate] = useState([])
  const [precoAntigoInputUpdate, setPrecoAntigoInputUpdate] = useState('')
  const [porcentagemDescontoInputUpdate, setPorcentagemDescontoInputUpdate] = useState('')
  const [numeroParcelasInputUpdate, setNumeroParcelasInputUpdate] = useState('')
  const [precoParcelasInputUpdate, setPrecoParcelasInputUpdate] = useState('')
  const [lojaInputUpdate, setlLojaInputUpdate] = useState('')
  const [semJurosInputUpdate, setSemJurosInputUpdate] = useState(false)

  // Dados usados para o formulário de create
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

  function addCategory(elementInput, category, idButton) {
    const input = document.getElementById(elementInput)
    input.value = input.value + category + ' '

    const button = document.querySelector(idButton)
    button.style.backgroundColor = '#198754'
    setTimeout(() => {
      button.style.backgroundColor = '#3498db'
    }, 300);

    setCategorySearchInput(input.value)
    setCategorySearchInputUpdate(input.value)
  }

  useBus( 'showModalUpdate', () => setShowModalUpdate(true) )

  async function itemPush(e) {
    e.preventDefault()
    pushMethod(
      nameInput,
      descriptionInput,
      precoInput,
      popularityInput,
      categorySearchInput,
      linkInput,
      imagesInput,
      imagesInput.url,
      imagesInput.alt,
      precoAntigoInput,
      porcentagemDescontoInput,
      numeroParcelasInput,
      precoParcelasInput,
      lojaInput,
      semJurosInput,
      () => {
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
          duration: 4,
          style: {
            marginTop: '30px'
          }
        })
        router.push('/refresh-page')
      }
    )
  }

  async function updateProduct (e) {
    e.preventDefault()
    updateMethod(
      idUpdate,
      nameInputUpdate,
      descriptionInputUpdate,
      precoInputUpdate,
      popularityInputUpdate,
      categorySearchInputUpdate,
      linkInputUpdate,
      imagesInputUpdate,
      imagesInputUpdate.url,
      imagesInputUpdate.alt,
      precoAntigoInputUpdate,
      porcentagemDescontoInputUpdate,
      numeroParcelasInputUpdate,
      precoParcelasInputUpdate,
      lojaInputUpdate,
      semJurosInputUpdate,
      () => {
        setShowModalUpdate(false)
        message.info({
          content: 'Produto atualizado com sucesso',
          duration: 4,
          style: {
            marginTop: '30px'
          }
        })
        router.push('/refresh-page')
      }
    )
  }

  useEffect( () => {
    if (state.auth.isAuth === true && response != []) {
      setDataBase(response)
    } else {
      alert('usuário não autenticado')
      router.push('/login')
    }

    return () => {
      setTimeout(() => {
        dispath(isAuthFalse())
      }, 10000000);
    }
  }, [dispath, response, router, state.auth.isAuth]);

  useEffect(() => {
    (showModal || showModalUpdate) ?
      document.body.classList.add('overflow-hidden') :
      document.body.classList.remove('overflow-hidden')

    document.addEventListener('wheel', () => {
      if (document.activeElement.type === 'number') {
        document.activeElement.blur()
      }
    })

    response.sort(function (a, b) {
      return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0);
    })
  })

  return (
    <>
      <LayoutDefault noHeader={true} title={'Painel de controle'}>
        { children }
        <section id="admin">
          <TableAdmin
            data={dataBase}
            mapModalUpdate={
              (item) => {
                setIdUpdate(item.id)
                setImagesInputUpdate(item.images)
                setNameInputUpdate(item.name)
                setDescriptionInputUpdate(item.description)
                setPrecoInputUpdate(item.preco)
                setPopularityInputUpdate(item.popularity)
                setCategorySearchInputUpdate(item.categorySearch)
                setLinkInputUpdate(item.link)
                setPrecoAntigoInputUpdate(item.precoAntigo)
                setPorcentagemDescontoInputUpdate(item.porcentagemDesconto)
                setNumeroParcelasInputUpdate(item.numeroParcelas)
                setPrecoParcelasInputUpdate(item.precoParcelas)
                setlLojaInputUpdate(item.loja)
                setSemJurosInputUpdate(item.semJuros)
              }
            }
          />
          
          <div className="fixed-bar shadow-lg border-top py-2 px-3">
            <Link href={'/'}>
              <a className="btn btn-sm btn-primary me-2">
                <ion-icon style={{ fontSize: '12px', marginRight: '5px' }} name="arrow-back-outline" />
                Home
              </a>
            </Link>
            <button className="btn btn-sm btn-success" onClick={() => { setShowModal(true) }}>
              Adicionar produto
              <ion-icon style={{ fontSize: '16px', marginLeft: '5px' }} name="add-circle-outline" />
            </button>
          </div>
          
          {/* MODAL DE ADIÇÃO DE PRODUTO */}
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
                <form onSubmit={itemPush} action="">
                  <button className="button-close-modal-admin" onClick={(e) => { e.preventDefault(), setShowModal(false) }}>
                    <ion-icon style={{ fontSize: '20px' }} name="close-outline"></ion-icon>
                  </button>
                  <h4 className="mb-3">
                    Adicionar produto
                  </h4>
                  { /** Inputs de texto */ }
                  <input type="text" className="form-control" placeholder="Nome" onChange={(e) => { setNameInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Descrição" onChange={(e) => { setDescriptionInput(e.target.value) }} />
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
                          onClick={(e) => {
                            e.preventDefault()
                            addCategory(
                              'categoriaDeBusca',
                              item.category,
                              `.button-add-category-${index}`
                            )
                          }}
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
                          onClick={(e) => {
                            e.preventDefault()
                            addCategory(
                              'categoriaDeBusca',
                              item.category,
                              `.button-add-category-${buttonsCategory.avulsos.length + index}`
                            )
                          }}
                        >
                          { item.title }
                        </button>
                      )
                    })
                  }
                  <input type="text" className="form-control mt-5" placeholder="Link de afiliado" onChange={(e) => { setLinkInput(e.target.value) }} />
                  <input type="number" id="preco-antigo-create" className="form-control" placeholder="Preço antigo" onChange={(e) => { setPrecoAntigoInput(e.target.value) }} />
                  <input type="number" id="preco-novo-create" className="form-control" placeholder="Preço Novo" onChange={(e) => { setPrecoInput(e.target.value) }} />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Porcentagem de desconto"
                    onChange={(e) => { setPorcentagemDescontoInput(e.target.value) }}
                    value={porcentagemDescontoInput}
                    onFocus={() => {
                      const precoAntigo = document.querySelector('#preco-antigo-create').value
                      const precoNovo = document.querySelector('#preco-novo-create').value
                      var decreaseValue = precoAntigo - precoNovo
                      if (precoAntigo != '' && precoNovo != '') {
                        const result = decreaseValue / precoAntigo * 100
                        setPorcentagemDescontoInput(result.toFixed(0))
                      }
                    }}
                  />
                  <input type="text" className="form-control" placeholder="Número de parcelas" onChange={(e) => { setNumeroParcelasInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço das parcelas" onChange={(e) => { setPrecoParcelasInput(e.target.value) }} />
                  <select className="form-control" onChange={(e) => { setlLojaInput(e.target.value) }}>
                    <option value="" disabled selected>
                      Selecione a loja
                    </option>
                    <option value="Magazine luíza">
                      Magazine luíza
                    </option>
                    <option value="Lojas americanas">
                      Lojas americanas
                    </option>
                    <option value="Shopee">
                      Shopee
                    </option>
                  </select>
                  <div className="d-flex align-items-center" onClick={(e) => { setSemJurosInput(!semJurosInput) }}>
                    <input type="checkbox" checked={semJurosInput} id="check-sem-juros" className="mt-2" />
                    <label htmlFor="#check-sem-juros" className="ms-2">Sem juros?</label>
                  </div>

                  { /* Lista de imagens */ }
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
                  <input type="text" id="input-url" className="form-control mt-4" placeholder="Url da imagem" />
                  <input type="text" id="input-alt" className="form-control" placeholder="Alt da imagem" />
                  <button
                    className="btn btn-sm btn-success"
                    onClick={(e) => {
                      e.preventDefault()
                      setImagesInput(oldArray =>
                        [
                          ...oldArray,
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

          {/* MODAL DE ATUALIZAÇÃO DE PRODUTO */}
          <CSSTransition
            in={showModalUpdate}
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
                <form onSubmit={updateProduct} onClick={(e) => {e.stopPropagation()}}>
                  <button className="button-close-modal-admin" onClick={(e) => { e.preventDefault(), setShowModalUpdate(false) }}>
                    <ion-icon style={{ fontSize: '20px' }} name="close-outline"></ion-icon>
                  </button>
                  <h4 className="mb-3">
                    Atualizar produto
                  </h4>
                  { /** Inputs de texto */ }
                  <input type="text" defaultValue={nameInputUpdate} className="form-control" placeholder="Nome" onChange={(e) => { setNameInputUpdate(e.target.value) }} />
                  <input type="text" defaultValue={descriptionInputUpdate} className="form-control" placeholder="Descrição" onChange={(e) => { setDescriptionInputUpdate(e.target.value) }} />
                  <input type="number" defaultValue={popularityInputUpdate} className="form-control" placeholder="Popularidade" onChange={(e) => { setPopularityInputUpdate(e.target.value) }} />
                  <textarea type="text" defaultValue={categorySearchInputUpdate} id="categoriaDeBuscaUpdate" rows={3} className="form-control" placeholder="Categorias de busca" onChange={(e) => { setCategorySearchInputUpdate(e.target.value) }} />
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
                          onClick={(e) => {
                            e.preventDefault()
                            addCategory(
                              'categoriaDeBuscaUpdate',
                              item.category,
                              `.button-add-category-${index}`
                            )
                          }}
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
                          onClick={(e) => {
                            e.preventDefault()
                            addCategory(
                              'categoriaDeBuscaUpdate',
                              item.category,
                              `.button-add-category-${buttonsCategory.avulsos.length + index}`
                            )
                          }}
                        >
                          { item.title }
                        </button>
                      )
                    })
                  }
                  <input type="text" defaultValue={linkInputUpdate} className="form-control mt-5" placeholder="Link de afiliado" onChange={(e) => { setLinkInputUpdate(e.target.value) }} />
                  <input type="number" id="preco-antigo-update" defaultValue={precoAntigoInputUpdate} className="form-control" placeholder="Preço antigo" onChange={(e) => { setPrecoAntigoInputUpdate(e.target.value) }} />
                  <input type="number" id="preco-novo-update" defaultValue={precoInputUpdate} className="form-control" placeholder="Preço" onChange={(e) => { setPrecoInputUpdate(e.target.value) }} />
                  <input
                    type="number"
                    defaultValue={porcentagemDescontoInputUpdate}
                    value={porcentagemDescontoInputUpdate}
                    className="form-control"
                    placeholder="Porcentagem de desconto"
                    onChange={(e) => { setPorcentagemDescontoInputUpdate(e.target.value) }}
                    onFocus={() => {
                      const precoAntigo = document.querySelector('#preco-antigo-update').value
                      const precoNovo = document.querySelector('#preco-novo-update').value
                      var decreaseValue = precoAntigo - precoNovo
                      if (precoAntigo != '' && precoNovo != '') {
                        const result = decreaseValue / precoAntigo * 100
                        setPorcentagemDescontoInputUpdate(result.toFixed(0))
                      }
                    }}
                  />
                  <input type="text" defaultValue={numeroParcelasInputUpdate} className="form-control" placeholder="Número de parcelas" onChange={(e) => { setNumeroParcelasInputUpdate(e.target.value) }} />
                  <input type="text" defaultValue={precoParcelasInputUpdate} className="form-control" placeholder="Preço das parcelas" onChange={(e) => { setPrecoParcelasInputUpdate(e.target.value) }} />
                  <select className="form-control" onChange={(e) => { setlLojaInputUpdate(e.target.value) }}>
                    <option value="" disabled selected>
                      Selecione a loja
                    </option>
                    <option value="Magazine luíza">
                      Magazine luíza
                    </option>
                    <option value="Lojas americanas">
                      Lojas americanas
                    </option>
                    <option value="Shopee">
                      Shopee
                    </option>
                  </select>
                  <div className="d-flex align-items-center" onClick={(e) => { setSemJurosInputUpdate(!semJurosInputUpdate) }}>
                    <input type="checkbox" checked={semJurosInputUpdate} id="check-sem-juros" className="mt-2" />
                    <label htmlFor="#check-sem-juros" className="ms-2">Sem juros?</label>
                  </div>

                  { /** Lista de imagens */ }
                  <span className="d-block mt-4">
                    Imagens: {imagesInputUpdate.length}
                  </span>
                  <hr className="mt-1 mb-4" />
                  { imagesInputUpdate.map((item, index) => {
                      return(
                        <div key={index}>
                          {
                            imagesInputUpdate.length > 0 &&
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
                                  imagesInputUpdate.splice(index, 1)
                                  setImagesInputUpdate(oldArray => [...oldArray])
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
                  <input type="text" id="input-url" className="form-control mt-4" placeholder="Url da imagem" />
                  <input type="text" id="input-alt" className="form-control" placeholder="Alt da imagem" />
                  <button
                    className="btn btn-sm btn-success"
                    onClick={(e) => {
                      e.preventDefault()
                      setImagesInputUpdate(oldArray =>
                        [
                          ...oldArray,
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
                      Atualizar
                    </button>
                    <button className="btn btn-danger ms-3" onClick={(e) => { e.preventDefault(), setShowModalUpdate(false) }}>
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

export const getServerSideProps = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get?NEXT_PUBLIC_API_KEY=FCdjakJOq6yRXCEr0L1a9JnFrNmM5UkjDqIM4pTvplFNIODl8vuIXzfEc`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};
