import { useState, useEffect } from "react";

function Stars({ comparator }) {
  const [result, setResult] = useState(0)

  useEffect(() => {
    const calcDivider = comparator / 10 / 2
    setResult(calcDivider.toFixed(1))
  }, [comparator, result])
  

  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGgap: '4px' }}>

      { comparator <= 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline"/> }
      { comparator <= 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator <= 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator <= 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator <= 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 10 && comparator <= 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 10 && comparator <= 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 10 && comparator <= 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 10 && comparator <= 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 10 && comparator <= 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 20 && comparator <= 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 20 && comparator <= 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }
      { comparator > 20 && comparator <= 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 20 && comparator <= 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 20 && comparator <= 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 30 && comparator <= 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 30 && comparator <= 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 30 && comparator <= 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 30 && comparator <= 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 30 && comparator <= 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 40 && comparator <= 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 40 && comparator <= 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 40 && comparator <= 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }
      { comparator > 40 && comparator <= 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 40 && comparator <= 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 50 && comparator <= 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 50 && comparator <= 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 50 && comparator <= 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 50 && comparator <= 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { comparator > 50 && comparator <= 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 60 && comparator <= 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 60 && comparator <= 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 60 && comparator <= 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 60 && comparator <= 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }
      { comparator > 60 && comparator <= 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator > 70 && comparator <= 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 70 && comparator <= 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 70 && comparator <= 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 70 && comparator <= 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 70 && comparator <= 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { comparator >= 85 && comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator >= 85 && comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator >= 85 && comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator >= 85 && comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator >= 85 && comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }

      { comparator > 95 && comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 95 && comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 95 && comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 95 && comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { comparator > 95 && comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }

      <span className="small">
        ({ result })
      </span>
    </div>
  );
}

export default Stars;