import HeadDefault from "../components/HeaderAndFooter/HeadDefault";
import ScriptsDefault from "../components/HeaderAndFooter/ScriptsDefault";
import Header from "../components/Header/Header";

export default function LayoutDefault({ title, header = true, children, modelScroll = false, linksCategory }) {
  return (
    <>
      <HeadDefault title={title} />
      {header && <Header modelScroll={modelScroll} linksCategory={linksCategory} /> }
      <main>{children}</main>
      <ScriptsDefault />
    </>
  )
}