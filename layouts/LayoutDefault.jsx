import HeadDefault from "../components/HeaderAndFooter/HeadDefault";
import ScriptsDefault from "../components/HeaderAndFooter/ScriptsDefault";
import Header from "../components/Header";

export default function LayoutDefault(props) {
  return (
    <>
      <HeadDefault title={props.title} />
      {props.noHeader || true &&
        <Header />
      }
      <main>
        {props.children}
      </main>
      <ScriptsDefault />
    </>
  )
}