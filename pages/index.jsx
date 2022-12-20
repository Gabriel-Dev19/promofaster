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
          colorBakcdrop={'0, 0, 0, 0.4'}
          tagTitle={'h1'}
          slidersPerSwiper={10}
          products={response}
          filterCategory={[categories.notebooks.tag, categories.smartphones.tag]}
          infos={{
            title: `Melhores promoções em ${categories.smartphones.title.toLowerCase()} e ${categories.notebooks.title.toLowerCase()}!`,
            description: 'Procurando um celular ou notebook? Aqui você encontra as melhores ofertas.'
          }}
        />
        <SliderProducts
          products={response}
          paddingTop={70}
          header={{
            title: 'Melhores ofertas',
            icon: 'star-outline',
            hrefVerMais: '/melhores-ofertas'
          }}
        />
        <SliderProducts
          products={response}
          paddingTop={80}
          filterCategory={[ categories.audio.tag ]}
          header={{
            title: 'Áudio',
            color: 'color-audio',
            icon: 'headset-outline',
            hrefVerMais: '/audio'
          }}
        />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://promofaster.com.br/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};
