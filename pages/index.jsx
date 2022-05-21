import HeroSrore from "../components/HeroStore";
import LayoutDefault from "../layouts/LayoutDefault";
import { useState, useEffect } from "react";

export default function Index({ products }) {
  const [dataBase, setDataBase] = useState([])

  // function getProducts() {
  //   const dev = process.env.NODE_ENV !== 'production'
  //   const DEV_URL = 'http://localhost:3000/'
  //   const PROD_URL = 'https://promofaster.vercel.app/'
  //   axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`)
  //     .then((res) => {
  //       setDataBase(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
// 
  // useEffect(() => {
  //   getProducts()
  // })

  return (
    <>
      <LayoutDefault>
        <HeroSrore products={products} />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = 'http://localhost:3000/'
  const PROD_URL = 'https://promofaster.vercel.app/'

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/products`);
  // extract the data
  let data = await response.json();

  return {
      props: {
        products: data,
      },
  };
}
