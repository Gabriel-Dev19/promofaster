import { formattedURL } from "../../../helpers/formattedURL"

export default function database() {
  return [
    {
      id:                  1,
      name:                'String vazia',
      description:         'String vazia',
      preco:               'String vazia',
      popularity:          'String vazia',
      categorySearch:      'String vazia',
      link:                'String vazia',
      images: [
        {
          url: 'url da imagem',
          alt: 'Alt da imagem'
        },
        {
          url: 'url da imagem',
          alt: 'Alt da imagem'
        }
      ],
      precoAntigo:         'String vazia',
      porcentagemDesconto: 'String vazia',
      numeroParcelas:      'String vazia',
      precoParcelas:       'String vazia',
      loja:                'String vazia',
      slug:                formattedURL('String vazia'),
      semJuros:            true
    },

    {
      id:                  2,
      name:                'String vazia',
      description:         'String vazia',
      preco:               'String vazia',
      popularity:          'String vazia',
      categorySearch:      'String vazia',
      link:                'String vazia',
      images: [
        {
          url: 'url da imagem',
          alt: 'Alt da imagem'
        }
      ],
      precoAntigo:         'String vazia',
      porcentagemDesconto: 'String vazia',
      numeroParcelas:      'String vazia',
      precoParcelas:       'String vazia',
      loja:                'String vazia',
      slug:                formattedURL('String vazia 2'),
      semJuros:            true
    }
  ]
}