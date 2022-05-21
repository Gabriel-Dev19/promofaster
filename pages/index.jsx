import HeroSrore from "../components/HeroStore";
import LayoutDefault from "../layouts/LayoutDefault";
import axios from 'axios'
import { useState, useEffect } from "react";

export default function Index({ products }) {
  const [dataBase, setDataBase] = useState([])

  function getProducts() {
    const dev = process.env.NODE_ENV !== 'production'
    const DEV_URL = 'http://localhost:3000/'
    const PROD_URL = 'https://promofaster.vercel.app/'
    axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`)
      .then((res) => {
        setDataBase(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getProducts()
  })

  return (
    <>
      <LayoutDefault>
        <HeroSrore products={dataBase} />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}
