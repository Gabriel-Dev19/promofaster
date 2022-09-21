import FormatBrl from "./FormatBrl";
import Stars from "./Rating";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'

export default function Product({
  linkProduct, nameProduct, images, precoAntigo,
  porcentagemDesconto, realPrice, verifyTextGreen,
  numeroParcelas, priceParcelas, popularity, lojaVendedora
}) {
  const uniqueId = Date.now()

  return (
    <div
      id={'product-' + uniqueId}
      className="product shadow-sm"
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
          modules={[Navigation]}
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
        <Link href={linkProduct} passHref>
          <a title={nameProduct}>
            {nameProduct}
          </a>
        </Link>
        <div className="col-12 small mt-2 d-flex align-items-center px-0">
          <div style={{ opacity: '.6', lineHeight: '100%' }} title={FormatBrl(precoAntigo)}>
            <strike>{ FormatBrl(precoAntigo) }</strike>
          </div>
          <span className="desconto">{porcentagemDesconto}% off</span>
        </div>
        <div className="format-price" title={FormatBrl(realPrice)}>
          { FormatBrl(realPrice) }
        </div>
        <span className="small col-12 row mx-0 px-0">
          até&nbsp;
          <span className="col-auto px-0 row mx-0" style={{ color: verifyTextGreen ? '#27ae60' : '', fontWeight: verifyTextGreen ? '500' : '' }}>
            {numeroParcelas}x de&nbsp;
            <span className="col-auto px-0">
              { FormatBrl(priceParcelas) }
            </span>
          </span>
        </span>
        <div className="mt-1">
          <Stars comparator={popularity} />
        </div>
        <span style={{ opacity: '.9', fontWeight: '300' }} className="mt-1 small loja-vendedora d-block">
          vendido por {lojaVendedora}
        </span>
      </div>
    </div>
  );
}

export function ProductExtended({
  linkProduct, nameProduct, images, precoAntigo,
  porcentagemDesconto, realPrice, verifyTextGreen,
  numeroParcelas, priceParcelas, popularity, lojaVendedora
}) {

  return(
    <div className="product-extended">
      <img src={images[0].url} loading="lazy" height={100} width={100} alt={images[0].url} />
      <div className="text">
        <Link href={linkProduct} passHref>
          <a title={nameProduct}>
            {nameProduct}
          </a>
        </Link>
        <div className="col-12 small mt-1 d-flex align-items-center px-0">
          <div style={{ opacity: '.6', lineHeight: '100%' }} title={FormatBrl(precoAntigo)} >
            <strike>{ FormatBrl(precoAntigo) }</strike>
          </div>
          <span className="desconto">{porcentagemDesconto}% off</span>
        </div>
        <div className="format-price" title={FormatBrl(realPrice)}>
          { FormatBrl(realPrice) }
        </div>
        <span className="small col-12 row mx-0 px-0">
          até&nbsp;
          <span className="col-auto px-0 row mx-0" style={{ color: verifyTextGreen ? '#27ae60' : '', fontWeight: verifyTextGreen ? '500' : '' }}>
            {numeroParcelas}x de&nbsp;
            <span className="col-auto px-0">
              { FormatBrl(priceParcelas) }
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}
