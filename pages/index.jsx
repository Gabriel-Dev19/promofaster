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
          image={'https://i.imgur.com/GOTvD3d.jpg'}
          configsBg={'no-repeat center center/cover'}
          configBackdrop={'180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75) 60%'}
          tagTitle={'h1'}
          slidersPerSwiper={10}
          products={response}
          filterCategory={[categories.notebooks.tag, categories.smartphones.tag]}
          infos={{
            title: `Melhores <em>promoções</em> em <em>${categories.smartphones.title.toLowerCase()}</em> e ${categories.notebooks.title.toLowerCase()}!`,
            description: `As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em ${categories.smartphones.title} e ${categories.notebooks.title}!`
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
