import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import Product from './Product'
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import Skeleton from './Skeleton'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default function HeroSrore() {
  const swiperRef = useRef(null)
  const [dataBase, setDataBase] = useState([])
  const [showSkeleton, setShowSkeleton] = useState(true)

  async function getProducts() {
    const dev = process.env.NODE_ENV !== 'production'
    const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
    const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
    await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get`).then((res) => {
      setShowSkeleton(false)
      setDataBase(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section id="hero-store">
      {
        showSkeleton
        ?
        <div className="container">
          <Skeleton colunms={4} heightEls={350} elements={4} />
        </div>
        :
        <div
          className="container"
          onMouseEnter={() => { swiperRef.current.swiper.autoplay.stop() }}
          onMouseLeave={() => { swiperRef.current.swiper.autoplay.start() }}
        >
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            autoplay={{
              delay: 2000
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.6,
                spaceBetween: 15
              },
              399.95: {
                slidesPerView: 1.6,
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
                      lojaVendedora={item.loja}
                    />
                  </SwiperSlide>
                )
              }).slice(0, 8)
            }
          </Swiper>
        </div>
      }
    </section>
  )
}
