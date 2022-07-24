import FormatPrice from "./FormatPrice";
import Stars from "./Rating";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
SwiperCore.use([Navigation])

function Product({
  linkProduct, nameProduct, images, precoAntigo,
  porcentagemDesconto, realPrice, verifyTextGreen,
  numeroParcelas, priceParcelas, popularity, lojaVendedora
}) {
  const uniqueId = Date.now()

  return (
    <Link href={linkProduct} passHref>
      <a
        id={'product-' + uniqueId}
        title={nameProduct}
        className="product shadow"
      >
        <div className="img">
          <button className="btn-prev" onClick={(e) => e.preventDefault()}><ion-icon name="chevron-back-outline" /></button>
          <button className="btn-next" onClick={(e) => e.preventDefault()}><ion-icon name="chevron-forward-outline" /></button>
          <Swiper
            allowTouchMove={false}
            navigation={{
              prevEl: `#product-${uniqueId} .btn-prev`,
              nextEl: `#product-${uniqueId} .btn-next`,
            }}
          >
            {
              images.map((item, index) => {
                return(
                  <SwiperSlide key={index}>
                    <img src={item.url} alt={item.alt} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="text">
          <h6>
            {nameProduct}
          </h6>
          <div className="col-12 d-flex align-items-center px-0">
            <div
              className="mt-2 small"
              style={{ opacity: '.6' }}
              title={Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(precoAntigo)}
            >
              <strike>
                <FormatPrice price={precoAntigo} />
              </strike>
            </div>
            <span className="desconto">
              {porcentagemDesconto}% off
            </span>
          </div>
          <div
            className="format-price"
            title={Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(realPrice)}
          >
            <FormatPrice price={realPrice} />
          </div>
          <span className="small col-12 row mx-0 px-0">
            até&nbsp;
            <span
              className="col-auto px-0 row mx-0"
              style={{
                color: verifyTextGreen ? '#27ae60' : '',
                fontWeight: verifyTextGreen ? '500' : '' }}
              >
              {numeroParcelas}x de&nbsp;
              <span className="col-auto px-0">
                <FormatPrice price={priceParcelas} />
              </span>
            </span>
          </span>
          <div className="mt-1 mt-sm-2">
            <Stars comparator={popularity} />
          </div>
          <span style={{ opacity: '.9', fontWeight: '300' }} className="mt-1 mt-sm-2 small loja-vendedora d-block">
            vendido por {lojaVendedora}
          </span>
        </div>
      </a>
    </Link>
  );
}

export default Product;