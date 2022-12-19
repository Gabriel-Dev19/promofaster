import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import LayoutDefault from '../../../layouts/LayoutDefault'
import Product from '../../../components/parts/Product'
import axios from 'axios'
import Skeleton from '../../../components/parts/Skeleton'

export default function SearchPage({ response = [] }) {
  const [dataBase, setDataBase] = useState([])
  const router = useRouter()
  const routerQueryName = router.query.name
  const [queryName, setQueryName] = useState('')
  const [orderLabel, setOrderLabel] = useState('')
  const [showOptionsOrder, setShowOptionsOrder] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  function orderByMinusPrice() {
    setDataBase(oldArray => [...oldArray].sort((x, y) => {
      return x.preco - y.preco
    }))
    document.querySelector('#page-search .order-by .box-options button:nth-child(1)').classList.add('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(2)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(3)').classList.remove('active')
    setOrderLabel('menor preço')
  }

  function orderByBigPrice() {
    setDataBase(oldArray => [...oldArray].sort((x, y) => {
      return y.preco - x.preco
    }))
    document.querySelector('#page-search .order-by .box-options button:nth-child(1)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(2)').classList.add('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(3)').classList.remove('active')
    setOrderLabel('maior preço')
  }

  function orderByRelevance() {
    setDataBase(oldArray => [...oldArray].sort((x, y) => {
      return y.popularity - x.popularity
    }))
    document.querySelector('#page-search .order-by .box-options button:nth-child(1)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(2)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(3)').classList.add('active')
    setOrderLabel('maior relevância')
  }

  useEffect(() => {
    if (response != []) {
      setShowSkeleton(false)
      setDataBase(response)
      orderByRelevance()
    }
    setQueryName(String(routerQueryName))
  }, [routerQueryName])

  return (
    <LayoutDefault title={routerQueryName}>
      <section id="page-search">
        {
          showSkeleton ?
          <div className="container">
            <Skeleton colunms={1} heightEls={30} elements={1} />
            <Skeleton colunms={4} heightEls={350} elements={8} />
          </div> :
          null
        }
        <div className={`container ${showSkeleton && 'd-none'}`}>
          <div className="row mx-0 justify-content-between align-items-end">
            <h5 className='px-0' style={{ width: '100%', maxWidth: '450px' }}>
              <span style={{ fontSize: '14px', fontWeight: '400' }}>
                Exibindo resultados para:
              </span> <br /> &ldquo;{routerQueryName}&ldquo;
            </h5>
            <div className="order-by mt-3 mt-lg-0 px-0 w-auto">
              <button
                onFocus={() => setShowOptionsOrder(true)}
                onBlur={() => setTimeout(() => setShowOptionsOrder(false), 10)}
                className="button-action"
                title='Ordenar lista de produtos'
                aria-label='Ordenar lista de produtos'
              >
                <span style={{ fontSize: '14px', marginRight: '5px' }}>
                  <span style={{ fontWeight: '600' }}>Ordernar por </span>{orderLabel}
                </span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>
              <div className={classNames({'box-options border shadow': true, 'd-none': !showOptionsOrder})}>
                <button onFocus={ () => orderByMinusPrice() } title="menor preço" aria-label='menor preço'>
                  menor preço
                </button>
                <button className='border-top border-bottom' onFocus={ () => orderByBigPrice() } title="maior preço" aria-label='maior preço'>
                  maior preço
                </button>
                <button onFocus={ () => orderByRelevance() } title="maior relevância" aria-label='maior relevância'>
                  maior relevância
                </button>
              </div>
            </div>
          </div>
          <ul className="mt-4 list-products">
            {
              dataBase.filter((item) => {
                return (
                  item.categorySearch.includes('')
                ) &&
                (
                  queryName.includes(' ') ?
                  item.name.toLowerCase().indexOf(queryName.toLowerCase().slice(item.name.indexOf(' ') + 1)) !== -1 :
                  item.name.toLowerCase().indexOf(queryName.toLowerCase()) !== -1
                  // item.name.toLowerCase().replace(' ', '').includes(queryName.toLowerCase().replace(' ', ''))
                  // item.categorySearch.toLowerCase().includes(queryName.toLowerCase().slice(item.categorySearch.indexOf(' ') + 1)) ||
                  // item.description.toLowerCase().includes(queryName.toLowerCase().slice(item.description.indexOf(' ') + 1)) ||
                  // item.id.toString().toLowerCase().includes(queryName.toLowerCase())
                  // item.name.toLowerCase().includes(campoInput.toLowerCase().substr(0, 4))
                )
              }).map((item, index) => {
                return(
                  <li key={index}>
                    <Product
                      numberId={index + 1}
                      linkProduct={{pathname: '/products/view/[slug]', query: { slug: item.slug}}}
                      images={item.images}
                      nameProduct={item.name}
                      precoAntigo={item.precoAntigo}
                      porcentagemDesconto={item.porcentagemDesconto}
                      realPrice={item.preco}
                      verifyTextGreen={item.semJuros}
                      numeroParcelas={item.numeroParcelas}
                      priceParcelas={item.precoParcelas}
                      popularity={item.popularity}
                      lojaVendedora={item.loja}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </LayoutDefault>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://promofaster.com.br/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

