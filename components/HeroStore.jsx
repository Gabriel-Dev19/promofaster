import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import Product from './Product'
import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
SwiperCore.use([Navigation, Pagination, Autoplay])

function HeroSrore() {
  const swiperRef = useRef(null)
  const [dataBase, setDataBase] = useState([])

  function getProducts() {
    const dev = process.env.NODE_ENV !== "production"
    const DEV_URL = 'http://localhost:8877'
    const PROD_URL = 'https://promofaster.vercel.app'
    axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`)
      .then((res) => {
        setDataBase(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => getProducts())

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
            dataBase.map((item, index) => {
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

export default HeroSrore;