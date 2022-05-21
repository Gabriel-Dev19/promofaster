import axios from "axios";
import LayoutDefault from "../../../layouts/LayoutDefault";

export default function ViewPage ({ data }) {

  return(
    <LayoutDefault title={data.name} noHeader={true}>
      <div>About us: {data.name} </div>
      <div>About us: {data.id} </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  const dev = process.env.NODE_ENV !== "production"
  const DEV_URL = 'http://localhost:8877'
  const PROD_URL = 'https://promofaster.vercel.app'
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/product/${params.id}`);
  return {
    props: {
      data
    },
  };
};

export const getStaticPaths = async () => {
  const dev = process.env.NODE_ENV !== "production"
  const DEV_URL = 'http://localhost:8877'
  const PROD_URL = 'https://promofaster.vercel.app'
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/`);
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};