import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import LayoutDefault from '../../../layouts/LayoutDefault'
import {SwiperSlide} from 'swiper/react'
import Product from '../../../components/Product'
// import {connectToDatabase} from '../../../lib/mongodb'

export default function SearchPage({ products }) {
  const [dataBase, setDataBase] = useState([])
  const router = useRouter()
  const routerQueryName = router.query.name
  const [queryName, setQueryName] = useState('')
  const [orderLabel, setOrderLabel] = useState('')
  const [showOptionsOrder, setShowOptionsOrder] = useState(false)

  function orderByMinusPrice() {
    dataBase.sort((x, y) => {
      return x.preco - y.preco
    })
    setDataBase(oldArray => [...oldArray])
   
    document.querySelector('#page-search .order-by .box-options button:nth-child(1)').classList.add('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(2)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(3)').classList.remove('active')
    setOrderLabel('menor preço')
  }

  function orderByBigPrice() {
    dataBase.sort((x, y) => {
      return y.preco - x.preco
    })
    setDataBase(oldArray => [...oldArray])
   
    document.querySelector('#page-search .order-by .box-options button:nth-child(1)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(2)').classList.add('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(3)').classList.remove('active')
    setOrderLabel('maior preço')
  }

  function orderByRelevance() {
    dataBase.sort((x, y) => {
      return y.popularity - x.popularity
    })
    setDataBase(oldArray => [...oldArray])
   
    document.querySelector('#page-search .order-by .box-options button:nth-child(1)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(2)').classList.remove('active')
    document.querySelector('#page-search .order-by .box-options button:nth-child(3)').classList.add('active')
    setOrderLabel('maior relevância')
  }

  // function getProducts() {
  //   const dev = process.env.NODE_ENV !== 'production'
  //   const DEV_URL = 'http://localhost:3000'
  //   const PROD_URL = 'https://promofaster.vercel.app'
  //   axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`)
  //     .then((res) => {
  //       setDataBase(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  useEffect(() => {
    orderByRelevance()
    setQueryName(routerQueryName)
  }, [routerQueryName])

  return (
    <LayoutDefault title={routerQueryName}>
      <section id="page-search">
        <div className="container">
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
            {/* Filter Array search */}
            {products.filter((item) => {
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

              // Mapeia o array filtrado para retornar as listas
            }).map((item, index) => {
              return(
                <li key={index}>
                  <Product
                    numberId={index + 1}
                    linkProduct={{pathname: '/products/view/[id]', query: { id: item.id}}}
                    images={
                      item.images.map((itemImages, indexImages) => {
                        return(
                          <SwiperSlide key={indexImages}>
                            <img src={itemImages.url} alt={itemImages.alt} />
                          </SwiperSlide>
                        )
                      })
                    }
                    nameProduct={item.name}
                    precoAntigo={item.precoAntigo}
                    porcentagemDesconto={item.porcentagemDesconto}
                    realPrice={item.preco}
                    verifyTextGreen={item.semJuros}
                    numeroParcelas={item.numeroParcelas}
                    priceParcelas={item.precoParcelas}
                    popularity={item.popularity}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </LayoutDefault>
  )
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = 'http://localhost:3000'
  const PROD_URL = 'https://promofaster.vercel.app'

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/products`);
  // extract the data
  let data = await response.json();

  return {
      props: {
        products: data,
      },
  };
}

// export async function getStaticProps(ctx) {
//   let { db } = await connectToDatabase();
//   const products = await db
//   .collection('products')
//   .find({})
//   .sort({})
//   .toArray();
//   return {
//       props: {
//           products: JSON.parse(JSON.stringify(products)),
//       },
//   };
// }
// 
// export const getStaticPaths = async () => {
//   let { db } = await connectToDatabase();
//   const data = await db
//   .collection('products')
//   .find({})
//   .sort({})
//   .toArray();
//   const paths = data.map((product) => ({ params: { name: product.name.toString() } }));
//   return {
//     paths,
//     fallback: true,
//   };
// };