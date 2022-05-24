import axios from "axios";
import LayoutDefault from "../../../layouts/LayoutDefault";

export default function ViewPage ({ data }) {
  return(
    <>
      <LayoutDefault noHeader={true}>
        <div>About us: {data.id.id} </div>
        <div>About us: {data.name} </div>
        <div>About us: {data.description} </div>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`https://promofaster-git-apidefora-gabrielcamurcaaa10-gmailcom.vercel.app/api/products/${params.id}`);
  return {
    props: {
      data
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("https://promofaster-git-apidefora-gabrielcamurcaaa10-gmailcom.vercel.app/api/products");
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};