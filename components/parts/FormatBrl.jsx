export default function FormatBrl(number) {
  return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(number)
}
