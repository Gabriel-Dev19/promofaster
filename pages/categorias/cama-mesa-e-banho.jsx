import BannerCategory from "../../components/parts/BannerCategory";
import categories from "../../helpers/categories";
import LayoutDefault from "../../layouts/LayoutDefault";
import axios from 'axios'

export default function CamaMesaEBanho({ listProducts, infosHome }) {
  return(
    <LayoutDefault title={'Cama mesa e banho'}>
      <BannerCategory
        image={'https://i.imgur.com/TdHLoPw.jpg'}
        configsBg={'no-repeat center center/cover'}
        configBackdrop={'180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75) 60%'}
        tagTitle={'h1'}
        slidersPerSwiper={infosHome.banner.numberOfSlides}
        bestOffert={infosHome.banner.bestOffert}
        products={listProducts}
        filterCategory={infosHome.banner.categoriesOfSlides}
        infos={{
          title: `Melhores <em>promoções</em> em <br> <em>${categories.smartphones.title.toLowerCase()}</em> e ${categories.notebooks.title.toLowerCase()}!`,
          description: `As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em ${categories.smartphones.title} e ${categories.notebooks.title}!`
        }}
      />
    </LayoutDefault>
  )
}

export const getServerSideProps = async () => {
  const listProducts = (await axios.get(`https://promofaster.com.br/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`)).data;
  const infosHome = (await axios.get(`https://promofaster.com.br/api/pages/home`)).data;
  return {
    props: {
      listProducts,
      infosHome
    },
  };
};