import { useEffect } from "react";
import { useRouter } from 'next/router'
import Index from './admin'
import axios from 'axios'

export default function Refresh ({ response }) {
  const router = useRouter()
  useEffect(() => {
    history.pushState({}, null, '/admin')
    router.push('/admin')
  })
  return( <Index response={response}></Index> )
}

export const getServerSideProps = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};