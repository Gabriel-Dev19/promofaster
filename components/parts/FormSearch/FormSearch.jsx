import { useState } from "react"
import styles from './FormSearch.module.scss'

export default function FormSearch({ submitEvent }) {

  const [bgWhite, setBgWhite] = useState(false);

  return(
    <form
      className={`${styles.form_search} ${bgWhite && styles.bg_white}`}
      onSubmit={submitEvent}
      autoComplete={'off'}
    >
      <input
        id='search-header-input'
        type="text"
        className='form-control'
        required
        placeholder='Busque por algo...'
        onFocus={() => setBgWhite(true)}
        onBlur={() => setBgWhite(false)}
      />
      <button type='submit' title='Buscar' aria-label='Buscar'>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </form>
  )
}