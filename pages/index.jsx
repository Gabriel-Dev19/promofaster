import { useEffect, useState } from "react";
import HeroSrore from "../components/HeroStore";
import LayoutDefault from "../layouts/LayoutDefault";

export default function Index() {
  const [dataBase, setDataBase] = useState([])

  async function getProducts() {
    const response = await fetch(`/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const products = await response.json();
    setDataBase(products)
  }

  useEffect(() => { getProducts() }, [])

  return (
    <>
      <LayoutDefault>
        <HeroSrore products={dataBase} />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}
