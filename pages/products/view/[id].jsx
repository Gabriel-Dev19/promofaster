import axios from "axios";
import LayoutDefault from "../../../layouts/LayoutDefault";

export default function DeletePage ({response}) {

  // function deleteProduct () {
  //   axios.delete('http://apipromoshop-env.eba-jzpjzwfe.us-east-1.elasticbeanstalk.com/api/products/delete/' + id, product, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => {
  //     router.push('/')
  //   }, (response) => {
  //   })
  // }

  return(
    <LayoutDefault title={response.name} noHeader={true}>
      <div>About us: {response.name} </div>
      <div>About us: {response.id} </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`http://apipromoshop-env.eba-jzpjzwfe.us-east-1.elasticbeanstalk.com/api/product/${params.id}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("http://apipromoshop-env.eba-jzpjzwfe.us-east-1.elasticbeanstalk.com/api/products/");
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};