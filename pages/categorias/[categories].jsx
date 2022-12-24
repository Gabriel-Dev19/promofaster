import LayoutDefault from "../../layouts/LayoutDefault";
import axios from 'axios'
import categories from "../../helpers/categories";
import BannerCategory from "../../components/parts/BannerCategory";

export default function CamaMesaEBanho({ infosCategory = [], listProducts = [] }) {
  return(
    {/* <LayoutDefault title={infosCategory.title}>
      <BannerCategory
        image={infosCategory.bannerInitial.backgroundBanner}
        configsBg={'no-repeat center center/cover'}
        configBackdrop={'180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75) 60%'}
        tagTitle={'h1'}
        slidersPerSwiper={infosCategory.bannerInitial.numberOfSlides}
        bestOffert={infosCategory.bannerInitial.bestOffert}
        products={listProducts}
        filterCategory={infosCategory.bannerInitial.categoriesOfSlides}
        infos={{
          title: infosCategory.bannerInitial.titleBanner,
          description: infosCategory.bannerInitial.descriptionBanner
        }}
      />
      </LayoutDefault> */}
  )
}

// export const getStaticProps = async ({ params }) => {
//   const listProducts = (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/products/get?NEXT_PUBLIC_API_KEY_METHOD_GET=${process.env.NEXT_PUBLIC_API_KEY_METHOD_GET}`)).data;
//   const infosCategory = (await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/pages/categories/${params.categories}`)).data;
//   return {
//     props: {
//       listProducts,
//       infosCategory
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL_PROD}/api/pages/categories`);
//   const paths = data.map((categories) => ({ params: { categories: String(categories.slug) } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };