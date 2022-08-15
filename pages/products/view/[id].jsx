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
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/${params.id}?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
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
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};