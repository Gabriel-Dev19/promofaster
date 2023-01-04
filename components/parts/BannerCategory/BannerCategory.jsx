import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import 'swiper/css'
import { ProductExtended } from '../Product/Product'
import { useEffect, useState } from 'react'
import styles from './BannerCategory.module.scss'

export default function BannerCategory({
  images = [],
  products,
  bestOffert,
  slidersPerSwiper,
  filterCategory = [''],
  configsBg = 'no-repeat center center/cover',
  configBackdrop = '0, 0, 0, 0.3',
  tagTitle = 'h2',
  colorTitle = '#ffffff',
  infos = {
    title: 'Title',
    description: 'description'
  }
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 576.95 ? setIsMobile(true) : setIsMobile(false)
  })

  return(
    <section className={`${styles.banner_category} banner_category`}>
      {
        images.length <= 1
          ? (
            <div className={styles.banner} style={{ background: `linear-gradient(${configBackdrop}), url(${images[0]}) ${configsBg}` }}></div>
          ) : (
            <>
              <div className={styles.mask_backdrop}></div>
              <Swiper
                slidesPerView={'auto'}
                effect={'fade'}
                allowTouchMove={false}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
                modules={[Autoplay, EffectFade]}
                className={`${styles.swiper_background} swiper_background`}
              >
                {images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item} loading="lazy" height={700} width={1500} alt="Imagem de background" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )
      }
      <div className={`${styles.container} container`}>
        <div className={styles.infos}>
          { infos.title && (
            tagTitle === 'h1' ? (<h1 style={{ color: colorTitle }}>{parse(infos.title)}</h1>) : (<h2 style={{ color: colorTitle }}>{parse(infos.title)}</h2>)
          ) }
          { infos.description && (<p style={{ color: colorTitle }}>{parse(infos.description)}</p>)}
        </div>
        <Swiper
          spaceBetween={15}
          slidesPerView={'auto'}
          breakpoints={{
            0:       { slidesPerView: 1.3, centeredSlides: false },
            399:     { slidesPerView: 1.4, centeredSlides: false },
            469.95:  { slidesPerView: 1.6, centeredSlides: false },
            499.95:  { slidesPerView: 1.8, centeredSlides: false },
            575.95:  { slidesPerView: 1.7, centeredSlides: true },
            767.95:  { slidesPerView: 2.3, centeredSlides: true },
            991.95:  { slidesPerView: 3, centeredSlides: true },
            1199.95: { slidesPerView: 3.6, centeredSlides: true },
            1349.95: { slidesPerView: 3.8, centeredSlides: true }
          }}
          loop={true}
          autoplay={{
            delay: 3700,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          pagination={{clickable: true}}
          modules={[Autoplay, Pagination]}
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
                <SwiperSlide key={index}>
                  <ProductExtended
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
            }).slice(0, slidersPerSwiper || 6)
          }
        </Swiper>
      </div>
    </section>
  )
}