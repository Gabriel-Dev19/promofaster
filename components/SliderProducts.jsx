import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import Product from './Product'
import { useState, useEffect, useRef } from "react";
import Skeleton from './Skeleton'

export default function SliderProducts({ products, sliderPerPage }) {
  const swiperRef = useRef(null)
  const moduleSwiper = [Pagination, Autoplay]
  const [renderSkeletonMobile, setRenderSkeletonMobile] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  function verificationRenderSkeleton() {
    window.innerWidth < 767.95 ? setRenderSkeletonMobile(true) : setRenderSkeletonMobile(false)
  }

  useEffect(() => {
    products != [] ? setShowSkeleton(false) : null
    verificationRenderSkeleton()
    window.addEventListener('resize', verificationRenderSkeleton())
    products.sort((x, y) => {
      return y.porcentagemDesconto - x.porcentagemDesconto
    })
  }, [])

  return(
    <section className='slider-product'>
      {
        showSkeleton ?
        <div className="container">
          {
            renderSkeletonMobile ?
            <Skeleton colunms={2} heightEls={300} elements={2} /> :
            <Skeleton colunms={4} heightEls={400} elements={4} />
          }
        </div> :
        <div
          className="container"
          onMouseEnter={() => {swiperRef.current.swiper.autoplay.stop()}}
          onMouseLeave={() => {swiperRef.current.swiper.autoplay.start()}}
        >
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            pagination={{clickable: true}}
            modules={moduleSwiper}
            autoplay={{delay: 2000}}
            breakpoints={{
              0:       { slidesPerView: 1.6, spaceBetween: 15 },
              399.95:  { slidesPerView: 1.8, spaceBetween: 20 },
              479.95:  { slidesPerView: 2.1, spaceBetween: 20 },
              576.95:  { slidesPerView: 2.2, spaceBetween: 20 },
              767.95:  { slidesPerView: 2.4, spaceBetween: 20 },
              991.95:  { slidesPerView: 3.4, spaceBetween: 20 },
              1199.95: { slidesPerView: 4, spaceBetween: 30 }
            }}
            className="swiper-hero swiper-products"
          >
            {
              products.map((item, index) => {
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
              }).slice(0, sliderPerPage || '8')
            }
          </Swiper>
        </div>
      }
    </section>
  )
}