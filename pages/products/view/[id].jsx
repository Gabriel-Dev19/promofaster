import LayoutDefault from "../../../layouts/LayoutDefault";
import axios from 'axios'

export default function ViewPage ({ response }) {

  return(
    <LayoutDefault title={response.name} noHeader={true}>
      <div>About us: {response.name} </div>
      <div>About us: {response.id} </div>
      <div>About us: {response.description} </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/${params.id}?NEXT_PUBLIC_API_KEY_METHOD_GET=ObY8DtHs8B0gqU5LE1ci3q4V2vg1ovX7Ld39bFghUjDrHakzYYFTAmxalcdPVKzE5URV9qHYvsNyEUjI6v7KMgoLT0DLSDoYzV4u4tBvA4j11x1nHLhwDSRFu1O5KGSz`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

export const getStaticPaths = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=ObY8DtHs8B0gqU5LE1ci3q4V2vg1ovX7Ld39bFghUjDrHakzYYFTAmxalcdPVKzE5URV9qHYvsNyEUjI6v7KMgoLT0DLSDoYzV4u4tBvA4j11x1nHLhwDSRFu1O5KGSz`);
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};