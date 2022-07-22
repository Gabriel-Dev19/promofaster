import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper'
import 'swiper/css'
import Product from './Product'
import { useEffect, useRef } from "react";

export default function SliderProducts({ productsSlider, sliderPerPage }) {
  const swiperRef = useRef(null)
  const moduleSwiper = [Navigation, Pagination, Autoplay, FreeMode]

  return(
    <div
      className="container"
      onMouseEnter={() => {swiperRef.current.swiper.autoplay.stop()}}
      onMouseLeave={() => {swiperRef.current.swiper.autoplay.start()}}
    >
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        freeMode={window.innerWidth < 767.95}
        pagination={{
          clickable: true
        }}
        modules={moduleSwiper}
        autoplay={{
          delay: 2000
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.6,
            spaceBetween: 15
          },
          399.95: {
            slidesPerView: 1.8,
            spaceBetween: 20
          },
          479.95: {
            slidesPerView: 2.1,
            spaceBetween: 20
          },
          576.95: {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          767.95: {
            slidesPerView: 2.4,
            spaceBetween: 20
          },
          991.95: {
            slidesPerView: 3.4,
            spaceBetween: 20
          },
          1199.95: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        className="swiper-hero swiper-products"
      >
        {
          productsSlider.map((item, index) => {
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
  )
}