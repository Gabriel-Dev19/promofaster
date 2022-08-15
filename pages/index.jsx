import LayoutDefault from "../layouts/LayoutDefault";
import axios from 'axios'
import SliderProducts from "../components/SliderProducts";

export default function Index({ response }) {
  return (
    <>
      <LayoutDefault>
        <SliderProducts
          products={response}
          marginTop={150}
          header={{
            title: 'Melhores ofertas',
            color: 'color-melhores-ofertas',
            icon: 'star',
            hrefVerMais: '/melhores-ofertas'
          }}
        />
        <SliderProducts
          products={response}
          marginTop={100}
          header={{
            title: 'Cosméticos',
            color: 'color-moda',
            icon: 'flower-outline',
            hrefVerMais: '/moda'
          }}
        />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}

export const getServerSideProps = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=ObY8DtHs8B0gqU5LE1ci3q4V2vg1ovX7Ld39bFghUjDrHakzYYFTAmxalcdPVKzE5URV9qHYvsNyEUjI6v7KMgoLT0DLSDoYzV4u4tBvA4j11x1nHLhwDSRFu1O5KGSz`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};
