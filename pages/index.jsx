import LayoutDefault from "../layouts/LayoutDefault";
import axios from 'axios'
import SliderProducts from "../components/SliderProducts";

export default function Index({ response }) {
  return (
    <>
      <LayoutDefault>
        <SliderProducts products={response} />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}

export const getServerSideProps = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};
