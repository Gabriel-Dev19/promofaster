import HeadDefault from "../components/HeaderAndFooter/HeadDefault";
import ScriptsDefault from "../components/HeaderAndFooter/ScriptsDefault";
import Header from "../components/Header";

export default function LayoutDefault({ title, header = true, children, modelScroll = false }) {
  return (
    <>
      <HeadDefault title={title} />
      {header && <Header modelScroll={modelScroll} /> }
      <main>{children}</main>
      <ScriptsDefault />
    </>
  )
}