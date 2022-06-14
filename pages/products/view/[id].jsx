import LayoutDefault from "../../../layouts/LayoutDefault";
import axios from 'axios'

export default function ViewPage ({ response }) {

  return(
    <LayoutDefault title={'/'} noHeader={true}>
      <div>About us: {'/'} </div>
      <div>About us: {'/'} </div>
      <div>About us: {'/'} </div>
    </LayoutDefault>
  )
}

// export const getStaticProps = async ({ params }) => {
//   let dev = process.env.NODE_ENV !== 'production';
//   const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
//   const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
//   const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/${params.id}`);
//   const response = data;
//   return {
//     props: {
//       response,
//     },
//   };
// };
// 
// export const getStaticPaths = async () => {
//   let dev = process.env.NODE_ENV !== 'production';
//   const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
//   const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
//   const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get`);
//   const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };