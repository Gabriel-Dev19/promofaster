import LayoutDefault from "../../../layouts/LayoutDefault";
import { useRouter } from "next/router";
import {connectToDatabase} from '../../../lib/mongodb'

export default function ViewPage ({ products }) {
  const router = useRouter()
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

export async function getStaticProps(ctx) {
  let { db } = await connectToDatabase();
  const products = await db
  .collection('products')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  .find({})
  .sort({})
  .toArray();
  return {
      props: {
          products: JSON.parse(JSON.stringify(products)),
      },
  };
}

export const getStaticPaths = async () => {
  let { db } = await connectToDatabase();
  const data = await db
  .collection('products')
  .find({})
  .sort({})
  .toArray();
  const paths = data.map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};