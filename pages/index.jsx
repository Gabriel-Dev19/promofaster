import HeroSrore from "../components/HeroStore";
import LayoutDefault from "../layouts/LayoutDefault";
import {connectToDatabase} from '../lib/mongodb'

export default function Index({ products }) {
  return (
    <>
      <LayoutDefault>
        <HeroSrore products={products} />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}

export async function getStaticProps(ctx) {
  let { db } = await connectToDatabase();
  const products = await db
  .collection('products')
  .find({})
  .sort({})
  .toArray();
  return {
      props: {
          products: JSON.parse(JSON.stringify(products)),
      },
  };
}
