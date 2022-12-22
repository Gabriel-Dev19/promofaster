import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import { ProductExtended } from './Product'

export default function BannerCategory({
  image,
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
  return(
    <section className="banner-category" style={{ background: `linear-gradient(${configBackdrop}), url(${image}) ${configsBg}` }}>
      <div className="container">
        <div className="infos">
          { infos.title && (
            tagTitle === 'h1' ? (<h1 style={{ color: colorTitle }}>{parse(infos.title)}</h1>) : (<h2 style={{ color: colorTitle }}>{parse(infos.title)}</h2>)
          ) }
          { infos.description && (<p style={{ color: colorTitle }}>{parse(infos.description)}</p>)}
        </div>
        <Swiper
          spaceBetween={15}
          breakpoints={{
            0:       { slidesPerView: 1.3 },
            399:     { slidesPerView: 1.4 },
            469.95:  { slidesPerView: 1.6 },
            499.95:  { slidesPerView: 1.8 },
            575.95:  { slidesPerView: 1.7 },
            767.95:  { slidesPerView: 2.3 },
            991.95:  { slidesPerView: 3 },
            1199.95: { slidesPerView: 3.6 },
            1349.95: { slidesPerView: 4 }
          }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          navigation={{
            prevEl: 'ele',
            nextEl: 'ele'
          }}
          pagination={{clickable: true}}
          modules={[Autoplay, Pagination]}
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
            }).slice(0, slidersPerSwiper || 6)
          }
        </Swiper>
      </div>
    </section>
  )
}