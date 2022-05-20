import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import Product from './Product'
import { useRef } from 'react'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default function HeroSrore({ products }) {
  const swiperRef = useRef(null)

  return (
    <section id="hero-store">
      <div
        className="container"
        onMouseEnter={() => { swiperRef.current.swiper.autoplay.stop() }}
        onMouseLeave={() => { swiperRef.current.swiper.autoplay.start() }}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2000
          }}
          className="swiper-hero"
        >
          {
            products.map((item, index) => {
              return(
                <SwiperSlide key={index}>
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
                </SwiperSlide>
              )
            }).slice(0, 8)
          }
        </Swiper>
      </div>
    </section>
  )
}
