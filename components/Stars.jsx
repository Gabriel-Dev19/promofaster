import { useState, useEffect } from "react";

function Stars(props) {
  const [result, setResult] = useState(0)
  const [resultVerificator, setResultVerificator] = useState('')

  useEffect(() => {
    setResult(props.comparator / 10)
    setResultVerificator(
      result === 1 || result === 2 || result === 3 || result === 4 || result === 5 || result === 6 || result === 7 || result === 8 || result === 9 || result === 10 ? '.0' : ''
    )
  }, [props.comparator, result])
  

  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGgap: '4px' }}>

      { props.comparator < 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline"/> }
      { props.comparator < 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator < 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator < 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator < 10 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 10 && props.comparator < 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 10 && props.comparator < 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 10 && props.comparator < 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 10 && props.comparator < 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 10 && props.comparator < 20 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 20 && props.comparator < 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 20 && props.comparator < 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }
      { props.comparator >= 20 && props.comparator < 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 20 && props.comparator < 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 20 && props.comparator < 30 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 30 && props.comparator < 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 30 && props.comparator < 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 30 && props.comparator < 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 30 && props.comparator < 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 30 && props.comparator < 40 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 40 && props.comparator < 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 40 && props.comparator < 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 40 && props.comparator < 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }
      { props.comparator >= 40 && props.comparator < 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 40 && props.comparator < 50 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 50 && props.comparator < 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 50 && props.comparator < 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 50 && props.comparator < 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 50 && props.comparator < 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }
      { props.comparator >= 50 && props.comparator < 60 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 60 && props.comparator < 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 60 && props.comparator < 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 60 && props.comparator < 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 60 && props.comparator < 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }
      { props.comparator >= 60 && props.comparator < 70 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 70 && props.comparator < 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 70 && props.comparator < 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 70 && props.comparator < 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 70 && props.comparator < 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 70 && props.comparator < 85 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-outline" /> }

      { props.comparator >= 85 && props.comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 85 && props.comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 85 && props.comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 85 && props.comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator >= 85 && props.comparator <= 95 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star-half-outline" /> }

      { props.comparator > 95 && props.comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator > 95 && props.comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator > 95 && props.comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator > 95 && props.comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }
      { props.comparator > 95 && props.comparator <= 100 && <ion-icon style={{ marginRight: '4px', marginTop: '-2px', color: '#ffc107' }} name="star" /> }

      <span className="small">
        ({ result }{ resultVerificator })
      </span>
    </div>
  );
}

export default Stars;