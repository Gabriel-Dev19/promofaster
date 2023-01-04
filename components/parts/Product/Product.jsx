import formatBrl from "../../../helpers/formatBrl";
import Stars from "../Rating";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import { useEffect, useState } from "react";
import styles from './Product.module.scss'

export default function Product({ linkProduct, nameProduct, images = [], precoAntigo, realPrice, verifyTextGreen, numeroParcelas, priceParcelas, popularity, lojaVendedora }) {
  const uniqueId = Date.now()

  const [porcentagemDesconto, setPorcentagemDesconto] = useState(0);

  useEffect(() => {
    var decreaseValue = precoAntigo - realPrice
    if (precoAntigo != '' && realPrice != '') {
      const result = decreaseValue / precoAntigo * 100
      setPorcentagemDesconto(result.toFixed(0))
    }
  }, [precoAntigo, realPrice])

  return (
    <div
      id={'product-' + uniqueId}
      className={`${styles.product} product shadow-sm`}
    >
      <div className={styles.img}>
        <button className={styles.btn_prev} onClick={(e) => e.preventDefault()}><ion-icon name="chevron-back-outline" /></button>
        <button className={styles.btn_next} onClick={(e) => e.preventDefault()}><ion-icon name="chevron-forward-outline" /></button>
        <Swiper
          allowTouchMove={false}
          navigation={{
            prevEl: `#product-${uniqueId} .${styles.btn_prev}`,
            nextEl: `#product-${uniqueId} .${styles.btn_next}`,
          }}
          modules={[Navigation]}
          className={styles.swiper}
        >
          {
            images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.url} loading={'lazy'} height={200} width={200} alt={nameProduct} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className={styles.text}>
        <Link href={linkProduct} passHref>
          <a title={nameProduct}>
            {nameProduct}
          </a>
        </Link>
        <div className="col-12 small mt-2 d-flex align-items-center px-0">
          <div className="text-danger" style={{ opacity: '.6', lineHeight: '100%' }} title={formatBrl(precoAntigo)}>
            <strike>{ formatBrl(precoAntigo) }</strike>
          </div>
          <span className={styles.desconto}>{porcentagemDesconto}% off</span>
        </div>
        <div className={styles.format_price} title={formatBrl(realPrice)}>
          { formatBrl(realPrice) }
        </div>
        <span className={`${styles.small} col-12 row mx-0 px-0`}>
          até&nbsp;
          <span className="col-auto px-0 row mx-0" style={{ color: verifyTextGreen ? '#27ae60' : '', fontWeight: verifyTextGreen ? '500' : '' }}>
            {numeroParcelas}x de&nbsp;
            <span className="col-auto px-0">
              { formatBrl(priceParcelas) }
            </span>
          </span>
        </span>
        <div className="mt-1">
          <Stars comparator={popularity} />
        </div>
        <span style={{ opacity: '.9', fontWeight: '300' }} className={`${styles.small} ${styles.loja_vendedora} mt-1 d-block `}>
          vendido por {lojaVendedora}
        </span>
      </div>
    </div>
  );
}

export function ProductExtended({ linkProduct, nameProduct, images, precoAntigo, realPrice, verifyTextGreen, numeroParcelas, priceParcelas }) {

  const [porcentagemDesconto, setPorcentagemDesconto] = useState(0);

  useEffect(() => {
    var decreaseValue = precoAntigo - realPrice
    if (precoAntigo != '' && realPrice != '') {
      const result = decreaseValue / precoAntigo * 100
      setPorcentagemDesconto(result.toFixed(0))
    }
  }, [precoAntigo, realPrice])

  return(
    <div className={styles.product_extended}>
      <img src={images[0].url} loading="lazy" height={100} width={100} alt={nameProduct} />
      <div className={styles.text}>
        <Link href={linkProduct} passHref>
          <a title={nameProduct}>
            {nameProduct}
          </a>
        </Link>
        <div className={`${styles.small} col-12 mt-1 d-flex align-items-center px-0`}>
          <div className="text-danger" style={{ opacity: '.6', lineHeight: '100%' }} title={formatBrl(precoAntigo)} >
            <strike>{ formatBrl(precoAntigo) }</strike>
          </div>
          <span className={styles.desconto}>{porcentagemDesconto}% off</span>
        </div>
        <div className={styles.format_price} title={formatBrl(realPrice)}>
          { formatBrl(realPrice) }
        </div>
        <span className={`${styles.small} col-12 row mx-0 px-0`}>
          até&nbsp;
          <span className="col-auto px-0 row mx-0" style={{ color: verifyTextGreen ? '#27ae60' : '', fontWeight: verifyTextGreen ? '500' : '' }}>
            {numeroParcelas}x de&nbsp;
            <span className="col-auto px-0">
              { formatBrl(priceParcelas) }
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}
