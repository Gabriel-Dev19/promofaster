import LayoutDefault from "../../../../layouts/LayoutDefault";
import axios from 'axios'

export default function ViewPage ({ response, linksCategory }) {

  return(
    <LayoutDefault title={response.name} noHeader={true} linksCategory={linksCategory}>
      <div>About us: {response.name} </div>
      <div>About us: {response.id} </div>
      <div>About us: {response.description} </div>
      <div>About us: {response.slug} </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/products/${params.slug}?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`)).data;
  const response = data;
  const linksCategory = await (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/pages/categories`)).data;
  return {
    props: {
      response,
      linksCategory
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const paths = data.map((product) => ({ params: { slug: String(product.slug) } }));
  return {
    paths,
    fallback: false,
  };
};