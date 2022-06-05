import HeroSrore from "../components/HeroStore";
import LayoutDefault from "../layouts/LayoutDefault";
import { useState, useEffect } from "react";

export default function Index({ products }) {
  const [dataBase, setDataBase] = useState([])

  async function getProducts() {
    const dev = process.env.NODE_ENV !== 'production'
    const DEV_URL = 'http://localhost:3000'
    const PROD_URL = 'https://promofaster.herokuapp.com'
    const response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/products/get`)
    const products = await response.json()
    setDataBase(products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <LayoutDefault>
        <HeroSrore products={dataBase} />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}
