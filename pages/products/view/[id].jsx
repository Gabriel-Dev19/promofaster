import LayoutDefault from "../../../layouts/LayoutDefault";
import { useRouter } from "next/router";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function ViewPage ({ products }) {
  const router = useRouter()
  const [dataBase, setDataBase] = useState([])

  // function getProducts() {
  //   const dev = process.env.NODE_ENV !== 'production'
  //   const DEV_URL = 'http://localhost:3000/'
  //   const PROD_URL = 'https://promofaster.herokuapp.com/'
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

  return(
    <>
      {
        products.filter((item) => {
          return item.id.toString().includes(router.query.id)
        }).map((item, index) => {
          return(
            <LayoutDefault title={item.name} key={index} noHeader={true}>
              <div>About us: {item.name} </div>
              <div>About us: {item.id} </div>
              <div>About us: {item.description} </div>
            </LayoutDefault>
          )
        })
      }
    </>
  )
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = 'http://localhost:3000'
  const PROD_URL = 'https://promofaster.herokuapp.com'

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