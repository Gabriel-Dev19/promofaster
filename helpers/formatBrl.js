export default function formatBrl(number) {
  return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(number)
}
