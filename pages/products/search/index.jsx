import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LayoutDefault from '../../../layouts/LayoutDefault'
import Product from '../../../components/parts/Product/Product'
import axios from 'axios'
import Skeleton from '../../../components/parts/Skeleton'
import MiniSearch from 'minisearch'
import styles from './PageSearch.module.scss'
import Link from 'next/link'

export default function SearchPage({ response, linksCategory }) {
  const [dataBaseFiltered, setDataBaseFiltered] = useState([])
  const router = useRouter()
  const routerQueryName = router.query.parameter
  const [orderLabel, setOrderLabel] = useState('')
  const [showOptionsOrder, setShowOptionsOrder] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  function orderByMinusPrice() {
    setDataBaseFiltered(oldArray => [...oldArray].sort((x, y) => { return x.preco - y.preco }))
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(1)`).classList.add(styles.active)
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(2)`).classList.remove(styles.active)
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(3)`).classList.remove(styles.active)
    setOrderLabel('menor preço')
  }

  function orderByBigPrice() {
    setDataBaseFiltered(oldArray => [...oldArray].sort((x, y) => { return y.preco - x.preco }))
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(1)`).classList.remove(styles.active)
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(2)`).classList.add(styles.active)
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(3)`).classList.remove(styles.active)
    setOrderLabel('maior preço')
  }

  function orderByRelevance() {
    setDataBaseFiltered(oldArray => [...oldArray].sort((x, y) => { return y.popularity - x.popularity }))
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(1)`).classList.remove(styles.active)
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(2)`).classList.remove(styles.active)
    document.querySelector(`.${styles.page_search} .${styles.box_options} button:nth-child(3)`).classList.add(styles.active)
    setOrderLabel('maior relevância')
  }

  useEffect(() => {
    // Hide skeleton
    setShowSkeleton(false)

    // Search
    const miniSearch = new MiniSearch({
      fields: ['name', 'categorySearch'],
      storeFields: ['name', 'linkProduct', 'categorySearch', 'images', 'precoAntigo', 'preco', 'verifyTextGreen', 'numeroParcelas', 'precoParcelas', 'popularity', 'loja', 'slug']
    })
    miniSearch.addAll(response)
    setDataBaseFiltered(miniSearch.search(String(routerQueryName), {
      fuzzy: 0.2,
      // filter: item => String(item.categorySearch).includes('smartphones')
    }))

    // Order to relevance
    orderByRelevance()
  }, [response, routerQueryName])

  return (
    <LayoutDefault title={routerQueryName} modelScroll={true} linksCategory={linksCategory}>
      <section className={styles.page_search}>
        {
          showSkeleton ?
          <div className="container">
            <Skeleton colunms={1} heightEls={30} elements={1} />
            <Skeleton colunms={4} heightEls={350} elements={16} />
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
            <div className={`${styles.order_by} mt-3 mt-lg-0 px-0 w-auto`}>
              <button
                onFocus={() => setShowOptionsOrder(true)}
                onBlur={() => setTimeout(() => setShowOptionsOrder(false), 10)}
                className={styles.button_action}
                title='Ordenar lista de produtos'
                aria-label='Ordenar lista de produtos'
              >
                <span style={{ fontSize: '14px', marginRight: '5px' }}>
                  <span style={{ fontWeight: '600' }}>Ordernar por </span>{orderLabel}
                </span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>
              <div className={ `border shadow ${styles.box_options} ${!showOptionsOrder && 'd-none'} `}>
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
          <ul className={styles.list_products}>
            {dataBaseFiltered.map((item, index) => (
              <li key={index}>
                <Product
                  numberId={index + 1}
                  linkProduct={{pathname: '/products/view/[slug]', query: { slug: item.slug}}}
                  images={item.images}
                  nameProduct={item.name}
                  precoAntigo={item.precoAntigo}
                  realPrice={item.preco}
                  verifyTextGreen={item.semJuros}
                  numeroParcelas={item.numeroParcelas}
                  priceParcelas={item.precoParcelas}
                  popularity={item.popularity}
                  lojaVendedora={item.loja}
                />
              </li>
            ))}
          </ul>
          {dataBaseFiltered.length === 0 && (
            <div className={styles.not_found}>
              <img src={'/img/icons/alert-circle.svg'} loading={'lazy'} height={100} width={100} alt={'Ícone de alerta'} />
              <h3>Sem resultados</h3>
              <p>Não conseguimos encontrar resultados para {`"`}{ routerQueryName }{`"`}, verifique a ortografia ou navegue por uma categoria abaixo.</p>
              <ul>
                {linksCategory.map((item, index) => (
                  <li key={index}>
                    <Link href={'/categorias/' + item.slug}>
                      <a title={item.title}>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </LayoutDefault>
  )
}

export const getStaticProps = async () => {
  const data = await ( await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`)).data;
  const response = data;
  const linksCategory = await (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/pages/categories`)).data;
  return {
    props: {
      response,
      linksCategory
    },
  };
};
