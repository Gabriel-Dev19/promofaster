import LayoutDefault from "../layouts/LayoutDefault";
import axios from 'axios'
import SliderProducts from "../components/SliderProducts";
import BannerCategory from "../components/parts/BannerCategory";
import categories from "../helpers/categories";

export default function Index({ response }) {
  return (
    <>
      <LayoutDefault>
        <BannerCategory
          image={'/img/bg-tech-2.jpg'}
          configsBg={'no-repeat bottom center/cover'}
          opacityBackdrop={'0.6'}
          tagTitle={'h1'}
          products={response}
          filterCategory={[categories.notebooks.tag, categories.smartphones.tag]}
          infos={{
            title: 'Melhores promoções em celulares e notebooks!',
            description: 'Procurando um celular ou notebook? Aqui você encontra as melhores ofertas.'
          }}
        />
        <SliderProducts
          products={response}
          paddingTop={70}
          header={{
            title: 'Melhores ofertas',
            color: 'color-melhores-ofertas',
            icon: 'star',
            hrefVerMais: '/melhores-ofertas'
          }}
        />
        <SliderProducts
          products={response}
          paddingTop={100}
          header={{
            title: 'Cosméticos',
            color: 'color-moda',
            icon: 'flower-outline',
            hrefVerMais: '/moda'
          }}
        />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
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
