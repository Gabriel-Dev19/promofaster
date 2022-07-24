export default function FormSearch({ submitEvent }) {
  return(
    <form
      className='form-search'
      onSubmit={submitEvent}
      autoComplete={'off'}
    >
      <input
        id='search-header-input'
        type="text"
        className='form-control'
        required
        placeholder='Busque por algo...'
        onFocus={() => {document.querySelector('#headerComponent .form-search').classList.add('bg-white')}}
        onBlur={() => {document.querySelector('#headerComponent .form-search').classList.remove('bg-white')}}
      />
      <button type='submit' title='Buscar' aria-label='Buscar'>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </form>
  )
}