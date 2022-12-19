import LayoutDefault from "../../../layouts/LayoutDefault";
import axios from 'axios'

export default function ViewPage ({ response = [] }) {

  return(
    <LayoutDefault title={response.name} noHeader={true}>
      <div>About us: {response.name} </div>
      <div>About us: {response.id} </div>
      <div>About us: {response.description} </div>
      <div>About us: {response.slug} </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`https://promofaster.com.br/api/products/${params.slug}?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`https://promofaster.com.br/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const paths = data.map((product) => ({ params: { slug: String(product.slug) } }));
  return {
    paths,
    fallback: false,
  };
};