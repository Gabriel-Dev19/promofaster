import HeadDefault from "../components/HeaderAndFooter/HeadDefault";
import ScriptsDefault from "../components/HeaderAndFooter/ScriptsDefault";
import Header from "../components/Header";

export default function LayoutDefault({ title, header = true, children }) {
  return (
    <>
      <HeadDefault title={title} />
      {header && <Header /> }
      <main>{children}</main>
      <ScriptsDefault />
    </>
  )
}