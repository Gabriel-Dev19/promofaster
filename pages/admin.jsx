import LayoutDefault from "../layouts/LayoutDefault";
import { useEffect, useState } from 'react'
import axios from 'axios'
import FullScreen from "../components/FullScreen";
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { message, Popconfirm } from 'antd'
import { CloseCircleOutlined, DeleteTwoTone, EyeTwoTone } from '@ant-design/icons'

export default function Index() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

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
  const [semJurosInput, setSemJurosInput] = useState(false)
  const [dataBase, setDataBase] = useState([])

  function getProducts() {
    axios.get('https://promofaster-git-apidefora-gabrielcamurcaaa10-gmailcom.vercel.app/api/products')
      .then((res) => {
        setDataBase(res.data)
      })
      .catch((error) => {
        console.log(error)
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

  function itemPush(e) {
    e.preventDefault()
    const product = {
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
      semJuros: semJurosInput
    }
    axios.post('https://promofaster-git-apidefora-gabrielcamurcaaa10-gmailcom.vercel.app/api/products/create', JSON.stringify(product), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setDataBase(res.data)
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
      setSemJurosInput(false)

      message.success({
        content: 'Produto adicionado com sucesso',
        duration: 2,
        style: {
          marginTop: '30px'
        }
      })
    })
  }

  function deleteProduct (id) {
    axios.delete('https://promofaster-git-apidefora-gabrielcamurcaaa10-gmailcom.vercel.app/api/products/delete/' + id, {}, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setDataBase(res.data)
      message.error({
        content: 'Produto removido',
        duration: 2,
        style: {
          marginTop: '30px'
        }
      })
    }, (response) => {
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
                            <img src={item.images[0].url} style={{ height: '50px', width: '50px', objectFit: 'cover' }} height={100} width={100} alt={item.images[0].alt} /> :
                            null
                          }
                        </td>
                        {/*<td>{ item.images.map((subitem, subindex) => {
                                return(
                                  <div key={subindex}>
                                    {subitem.url}
                                  </div>
                                )
                        })}</td>*/}
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
                              <DeleteTwoTone style={{ fontSize: '22px' }} twoToneColor="red" />
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
                                }}
                              >
                                <EyeTwoTone style={{ fontSize: '22px' }} />
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
              <div className="content-full-screen" onClick={() => { setShowModal(false) }}>
                <form onSubmit={itemPush} action="" onClick={(e) => {e.stopPropagation()}}>
                  <input type="text" className="form-control" placeholder="Nome" onChange={(e) => { setNameInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Descrição" onChange={(e) => { setDescriptionInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço" onChange={(e) => { setPrecoInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Popularidade" onChange={(e) => { setPopularityInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Categoria de busca" onChange={(e) => { setCategorySearchInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Link de afiliado" onChange={(e) => { setLinkInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço antigo" onChange={(e) => { setPrecoAntigoInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Porcentagem de desconto" onChange={(e) => { setPorcentagemDescontoInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Número de parcelas" onChange={(e) => { setNumeroParcelasInput(e.target.value) }} />
                  <input type="text" className="form-control" placeholder="Preço das parcelas" onChange={(e) => { setPrecoParcelasInput(e.target.value) }} />
                  <div className="d-flex align-items-center" onClick={(e) => { setSemJurosInput(!semJurosInput) }}>
                    <input type="checkbox" checked={semJurosInput} id="check-sem-juros" className="mt-2" />
                    <label htmlFor="#check-sem-juros" className="ms-2">Sem juros?</label>
                    {semJurosInput.toString()}
                  </div>
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
                              <img src={item.url} style={{ height: '80px', width: '80px', objectFit: 'cover' }} height={100} width={100} alt={item.alt} />
                              <div className="ms-3">
                                <b>N° da Imagem:</b> {index + 1} <br />
                                <b>Link:</b> {item.url} <br />
                                <b>Alt:</b> {item.alt}
                              </div>
                              <button
                                className="btn btn-danger align-self-center ms-2 p-0"
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
                                }}>
                                <ion-icon name="trash-outline" style={{fontSize: '21px', minWidth: '21px'}} />
                              </button>
                            </div>
                          }
                        </div>
                      )
                  })}
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
                  <button className="btn btn-success" onClick={(e) => {
                    e.preventDefault()
                    setImagesInput(oldArray => [...oldArray, {url: document.getElementById('input-url').value, alt: document.getElementById('input-alt').value} ])
                    setTimeout(() => {
                      document.getElementById('input-alt').value = ''
                      document.getElementById('input-url').value = ''
                    }, 300);
                  }}>
                    Add Image
                  </button>
                  <div className="d-flex mt-4">
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
