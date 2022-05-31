import { useEffect, useState } from "react"

export default function Skeleton({ colunms, elements, heightEls }) {
  const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  const [frs, setFrs] = useState('')
  
  useEffect(() => {
    colunms === 1 ? setFrs('1fr') : null
    colunms === 2 ? setFrs('1fr 1fr') : null
    colunms === 3 ? setFrs('1fr 1fr 1fr') : null
    colunms === 4 ? setFrs('1fr 1fr 1fr 1fr') : null
  }, [colunms])


  return(
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: frs,
        rowGap: '20px',
        columnGap: '20px'
      }}
      className="borda"
    >
      {
        boxes.map((item, index) => {
          return(
            <div key={index} style={{ height: `${heightEls}px` }} className="loading-skeleton" />
          )
        }).slice(0, elements)
      }
    </div>
  )
}