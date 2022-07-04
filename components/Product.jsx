import FormatPrice from "./FormatPrice";
import Stars from "./Stars";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
SwiperCore.use([Navigation])

function Product(props) {
  return (
    <Link href={props.linkProduct} passHref>
      <a id={'product-' + props.numberId} title={props.nameProduct} className="product shadow">
        <div className="img">
          <button className="btn-prev" onClick={(e) => e.preventDefault()}>
            <ion-icon name="chevron-back-outline" />
          </button>
          <button className="btn-next" onClick={(e) => e.preventDefault()}>
            <ion-icon name="chevron-forward-outline" />
          </button>
          <Swiper
            allowTouchMove={false}
            navigation={{
              prevEl: `#product-${props.numberId} .btn-prev`,
              nextEl: `#product-${props.numberId} .btn-next`,
            }}
          >
            {props.images}
          </Swiper>
        </div>
        <div className="text">
          <h6>
            {props.nameProduct}
          </h6>
          <div className="col-12 d-flex align-items-center px-0">
            <div
              className="mt-2 small"
              style={{ opacity: '.6' }}
              title={Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.precoAntigo)}
            >
              <strike>
                <FormatPrice price={props.precoAntigo} />
              </strike>
            </div>
            <span className="desconto">
              {props.porcentagemDesconto}% off
            </span>
          </div>
          <div
            className="format-price"
            title={Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.realPrice)}
          >
            <FormatPrice price={props.realPrice} />
          </div>
          <span className="small col-12 row mx-0 px-0">
            até&nbsp;
            <span
              className="col-auto px-0 row mx-0"
              style={{
                color: props.verifyTextGreen !== '' ? '#27ae60' : '',
                fontWeight: props.verifyTextGreen !== '' ? '500' : '' }}
              >
              {props.numeroParcelas}x de&nbsp;
              <span className="col-auto px-0">
                <FormatPrice price={props.priceParcelas} />
              </span>
            </span>
          </span>
          <div className="mt-2">
            <Stars comparator={props.popularity} />
          </div>
          <span style={{ opacity: '.9', fontWeight: '300' }} className="mt-2 small loja-vendedora d-block">
            vendido por {props.lojaVendedora}
          </span>
        </div>
      </a>
    </Link>
  );
}

export default Product;