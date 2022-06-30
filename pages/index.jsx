import HeroSrore from "../components/HeroStore";
import LayoutDefault from "../layouts/LayoutDefault";

export default function Index() {
  return (
    <>
      <LayoutDefault>
        <HeroSrore />
        <section style={{height: '200vh'}}></section>
      </LayoutDefault>
    </>
  )
}
