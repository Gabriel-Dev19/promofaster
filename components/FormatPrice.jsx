function FormatPrice(props) {
  return (
    <div>
      { Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.price) }
    </div>
  )
}

export default FormatPrice;