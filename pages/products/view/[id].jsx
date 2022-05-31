import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import LayoutDefault from "../../../layouts/LayoutDefault";

export default function ViewPage () {
  const [dataBase, setDataBase] = useState([])
  const router = useRouter()

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

  return(
    <>
      {
        dataBase.filter((item) => {
          return item.id.toString().includes(router.query.id)
        }).map((item, index) => {
          return(
            <LayoutDefault title={item.name} key={index} noHeader={true}>
            <div>About us: {item.id} </div>
            <div>About us: {item.name} </div>
            <div>About us: {item.description} </div>
          </LayoutDefault>
          )
        })
      }
    </>
  )
}