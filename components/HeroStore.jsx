import { useState, useEffect } from "react";
import axios from 'axios'
import Skeleton from './Skeleton'
import SliderProducts from "./SliderProducts";

export default function HeroSrore() {
  const [dataBase, setDataBase] = useState([])
  const [renderSkeletonMobile, setRenderSkeletonMobile] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  async function getProducts() {
    const dev = process.env.NODE_ENV !== 'production'
    const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
    const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
    await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get`,).then((res) => {
      setShowSkeleton(false)
      setDataBase(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  function verificationRenderSkeleton() {
    window.innerWidth < 767.95 ?
    setRenderSkeletonMobile(true) :
    setRenderSkeletonMobile(false)
  }

  useEffect(() => {
    getProducts()
    verificationRenderSkeleton()
    window.addEventListener('resize', verificationRenderSkeleton())
  }, [])

  return (
    <section id="hero-store">
      {
        showSkeleton ?
        <div className="container">
          {
            renderSkeletonMobile ?
            <Skeleton colunms={2} heightEls={300} elements={2} /> :
            <Skeleton colunms={4} heightEls={400} elements={4} />
          }
        </div> :
        <SliderProducts productsSlider={dataBase} sliderPerPage={10} />
      }
    </section>
  )
}
