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
  const { data } = await axios.get(`https://apipromofaster.vercel.app/api/product/${params.id}`);
  return {
    props: {
      data
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("https://apipromofaster.vercel.app/api/products/");
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};