import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import Product from '../parts/Product/Product'
import { useState, useEffect, useRef } from "react";
import Skeleton from '../parts/Skeleton'
import Link from 'next/link'
import styles from './SliderProducts.module.scss'

export default function SliderProducts({
  products,
  slidersPerSwiper,
  paddingTop = 100,
  header = {
    color: 'color-melhores-ofertas',
    icon: 'star',
    title: 'Nome da categoria',
    hrefVerMais: '/'
  },
  bestOffert,
  filterCategory = ['']
}) {
  const swiperRef = useRef(null)
  const [verificationWindow, setVerificationWindow] = useState()
  const [showSkeleton, setShowSkeleton] = useState(true)

  const sizes = {
    mobile: 'mobile',
    desktop: 'desktop'
  }

  const verificationMobile = (param) => {
    window.innerWidth > param ? setVerificationWindow(sizes.desktop) : setVerificationWindow(sizes.mobile)
  }

  useEffect(() => {
    products != [] ? setShowSkeleton(false) : null
    verificationMobile(767.95)
    window.addEventListener('resize', () => verificationMobile(767.95))
  }, [products])

  return(
    <section className={`${styles.slider_product} slider_product`} style={{ paddingTop: `${verificationWindow == sizes.desktop ? paddingTop : paddingTop / 1.5}px` }}>
      {
        showSkeleton ?
        <div className="container">
          {
            verificationWindow == sizes.mobile ?
            <Skeleton colunms={2} heightEls={270} elements={2} /> :
            <Skeleton colunms={4} heightEls={400} elements={4} />
          }
        </div> :
        <div className="container">
          {
            header !== '' &&
            <div className={styles.title}>
              <div className={styles.icon_text}>
                <div className={styles.icon}>
                  <ion-icon name={header.icon} />
                </div>
                <h2>
                  {header.title}
                </h2>
              </div>
              <hr />
              <Link href={header.hrefVerMais || '/'}>
                <a className='btn btn-blue'>
                  { verificationWindow == sizes.mobile ? '+' : 'Ver mais' }
                </a>
              </Link>
            </div>
          }
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            pagination={{clickable: true}}
            modules={[Pagination]}
            breakpoints={{
              0:       { slidesPerView: 1.6, spaceBetween: 15 },
              399.95:  { slidesPerView: 1.8, spaceBetween: 18 },
              479.95:  { slidesPerView: 2.1, spaceBetween: 18 },
              576.95:  { slidesPerView: 2.2, spaceBetween: 18 },
              767.95:  { slidesPerView: 2.9, spaceBetween: 18 },
              991.95:  { slidesPerView: 3.8, spaceBetween: 18 },
              1199.95: { slidesPerView: 5, spaceBetween: 18 }
            }}
            className={styles.swiper_products}
          >
            {
              products
              .sort((x, y) => {
                return ((y.precoAntigo - y.preco) / y.precoAntigo * 100) - ((x.precoAntigo - x.preco) / x.precoAntigo * 100)
              })
              .filter((item) => {
                if (bestOffert) {
                  return ((item.precoAntigo - item.preco) / item.precoAntigo * 100) > 30
                } else {
                  return item
                }
              })
              .filter((item) => {
                return item.categorySearch.includes(filterCategory[0]) ||
                       item.categorySearch.includes(filterCategory[1]) ||
                       item.categorySearch.includes(filterCategory[2])
              })
              .map((item, index) => {
                return(
                  <SwiperSlide key={index} className={styles.swiper_slide}>
                    <Product
                      linkProduct={{pathname: '/products/view/[slug]', query: { slug: item.slug }}}
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
                  </SwiperSlide>
                )
              })
              .slice(0, slidersPerSwiper || 8)
            }
          </Swiper>
        </div>
      }
    </section>
  )
}