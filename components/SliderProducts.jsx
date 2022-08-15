import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import Product from './parts/Product'
import { useState, useEffect, useRef } from "react";
import Skeleton from './parts/Skeleton'
import Link from 'next/link'

export default function SliderProducts({
  products,
  sliderPerPage,
  marginTop = 120,
  header = {
    color: 'color-melhores-ofertas',
    icon: 'star',
    title: 'Nome da categoria',
    hrefVerMais: '/'
  },
  bestOffert = false,
  filterCategory = ''
}) {
  const swiperRef = useRef(null)
  const moduleSwiper = [Pagination]
  const [renderSkeletonMobile, setRenderSkeletonMobile] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  function verificationRenderSkeleton() {
    window.innerWidth < 767.95 ? setRenderSkeletonMobile(true) : setRenderSkeletonMobile(false)
  }

  useEffect(() => {
    products != [] ? setShowSkeleton(false) : null
    verificationRenderSkeleton()
    window.addEventListener('resize', verificationRenderSkeleton())
  }, [products])

  return(
    <section className='slider-product' style={{ marginTop: `${marginTop}px` }}>
      {
        showSkeleton ?
        <div className="container">
          {
            renderSkeletonMobile ?
            <Skeleton colunms={2} heightEls={300} elements={2} /> :
            <Skeleton colunms={4} heightEls={400} elements={4} />
          }
        </div> :
        <div className="container">
          {
            header !== '' &&
            <div className="title">
              <div className="icon-text">
                <div className={`icon ${header.color}`}>
                  <ion-icon name={header.icon} />
                </div>
                <h2>
                  {header.title}
                </h2>
              </div>
              <hr />
              <Link href={header.hrefVerMais || '/'}>
                <a className='btn btn-blue'>
                  Ver mais
                </a>
              </Link>
            </div>
          }
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            pagination={{clickable: true}}
            modules={moduleSwiper}
            breakpoints={{
              0:       { slidesPerView: 1.6, spaceBetween: 15 },
              399.95:  { slidesPerView: 1.8, spaceBetween: 18 },
              479.95:  { slidesPerView: 2.1, spaceBetween: 18 },
              576.95:  { slidesPerView: 2.2, spaceBetween: 18 },
              767.95:  { slidesPerView: 2.9, spaceBetween: 18 },
              991.95:  { slidesPerView: 3.8, spaceBetween: 18 },
              1199.95: { slidesPerView: 5, spaceBetween: 18 }
            }}
            className="swiper-products"
          >
            {
              products
              .sort((x, y) => {
                return y.porcentagemDesconto - x.porcentagemDesconto
              })
              .filter((item) => {
                if (bestOffert) {
                  return item.porcentagemDesconto > 30
                } else {
                  return item
                }
              })
              .filter((item) => {
                return item.categorySearch.includes(filterCategory)
              })
              .map((item, index) => {
                return(
                  <SwiperSlide key={index}>
                    <Product
                      numberId={index + 1}
                      linkProduct={{pathname: '/products/view/[id]', query: { id: item.id }}}
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
                  </SwiperSlide>
                )
              })
              .slice(0, sliderPerPage || '8')
            }
          </Swiper>
        </div>
      }
    </section>
  )
}