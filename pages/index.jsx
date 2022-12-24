import LayoutDefault from "../layouts/LayoutDefault";
import axios from 'axios'
import SliderProducts from "../components/SliderProducts";
import BannerCategory from "../components/parts/BannerCategory";
import categories from "../helpers/categories";

export default function Index({ listProducts, infosHome, linksCategory }) {
  return (
    <>
      <LayoutDefault linksCategory={linksCategory}>
        <BannerCategory
          image={infosHome.banner.backgroundBanner}
          configsBg={'no-repeat center center/cover'}
          configBackdrop={'180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75) 60%'}
          tagTitle={'h1'}
          slidersPerSwiper={infosHome.banner.numberOfSlides}
          bestOffert={infosHome.banner.bestOffert}
          products={listProducts}
          filterCategory={infosHome.banner.categoriesOfSlides}
          infos={{
            title: infosHome.banner.titleBanner,
            description: infosHome.banner.descriptionBanner
          }}
        />
        <SliderProducts
          products={listProducts}
          paddingTop={70}
          header={{
            title: 'Melhores ofertas',
            icon: 'star-outline',
            hrefVerMais: '/melhores-ofertas'
          }}
        />
        <SliderProducts
          products={listProducts}
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

export const getStaticProps = async () => {
  const listProducts = (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`)).data;
  const infosHome = (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/pages/home`)).data;
  const linksCategory = (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/pages/categories`)).data;
  return {
    props: {
      listProducts,
      infosHome,
      linksCategory
    },
  };
};
