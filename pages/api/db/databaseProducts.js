import { formattedURL } from "../../../helpers/formattedURL"

export default function database() {
  return [
    // Product 1
    {
      id:                  1,
      name:                'Celular motorola',
      slug:                formattedURL('Celular motorola'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'cama-mesa-e-banho smartphones eletrodomesticos',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1500',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 2 
    {
      id:                  2,
      name:                'Micro-ondas Electrolux MEO44 branco 34L 220V',
      slug:                formattedURL('Micro-ondas Electrolux MEO44 branco 34L 220V'),
      description:         'Descrição do produto',
      popularity:          '99',
      categorySearch:      'eletrodomesticos',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1200',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 3 
    {
      id:                  3,
      name:                'Micro-ondas Brastemp BMS46AB branco e cinza 32L 220V',
      slug:                formattedURL('Micro-ondas Brastemp BMS46AB branco e cinza 32L 220V'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'eletrodomesticos',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1300',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 4 
    {
      id:                  4,
      name:                'Smart TV Philco PTV42G52RCF LED Full HD 42 110V-220V',
      slug:                formattedURL('Smart TV Philco PTV42G52RCF LED Full HD 42 110V-220V'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'eletrodomesticos eletronicos',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1550',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 5 
    {
      id:                  5,
      name:                'Smart Tv Aiwa 43 Full Hd Hdr10 Dolby Áudio Aws-tv-43-bl-01',
      slug:                formattedURL('Smart Tv Aiwa 43 Full Hd Hdr10 Dolby Áudio Aws-tv-43-bl-01'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'eletrodomesticos eletronicos',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '958',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 6 
    {
      id:                  6,
      name:                'Alto-falante JBL Flip 6 portátil com bluetooth cinzento',
      slug:                formattedURL('Alto-falante JBL Flip 6 portátil com bluetooth cinzento'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'eletrodomesticos audio',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1510',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 7 
    {
      id:                  7,
      name:                'Alto-falante JBL Xtreme 3 portátil com bluetooth black',
      slug:                formattedURL('Alto-falante JBL Xtreme 3 portátil com bluetooth black'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'eletrodomesticos audio',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1230',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 8 
    {
      id:                  8,
      name:                'Samsung Galaxy Z Flip4 5G 128 GB violeta 8 GB RAM',
      slug:                formattedURL('Samsung Galaxy Z Flip4 5G 128 GB violeta 8 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1120',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 9 
    {
      id:                  9,
      name:                'Apple iPhone 11 (128 GB) - Preto',
      slug:                formattedURL('Apple iPhone 11 (128 GB) - Preto'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1190',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 10 
    {
      id:                  10,
      name:                'Samsung Galaxy S20 FE 5G Dual SIM 128 GB cloud lavender 6 GB RAM',
      slug:                formattedURL('Samsung Galaxy S20 FE 5G Dual SIM 128 GB cloud lavender 6 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1500',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 11 
    {
      id:                  11,
      name:                'Xiaomi Redmi Note 11 (Snapdragon) Dual SIM 128 GB graphite gray 6 GB RAM',
      slug:                formattedURL('Xiaomi Redmi Note 11 (Snapdragon) Dual SIM 128 GB graphite gray 6 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1500',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 12 
    {
      id:                  12,
      name:                'Xiaomi Redmi 10C Dual SIM 128 GB cinza 4 GB RAM',
      slug:                formattedURL('Xiaomi Redmi 10C Dual SIM 128 GB cinza 4 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1500',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 13 
    {
      id:                  13,
      name:                'Moto G22 Dual SIM 128 GB cosmic black 4 GB RAM',
      slug:                formattedURL('Moto G22 Dual SIM 128 GB cosmic black 4 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'cama-mesa-e-banho smartphones eletrodomesticos',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1100',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 14 
    {
      id:                  14,
      name:                'Samsung Galaxy A22 Dual SIM 128 GB preto 4 GB RAM',
      slug:                formattedURL('Samsung Galaxy A22 Dual SIM 128 GB preto 4 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1700',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 15 
    {
      id:                  15,
      name:                'Samsung Galaxy A22 Dual SIM 128 GB preto 4 GB RAM',
      slug:                formattedURL('Samsung Galaxy A22 Dual SIM 128 GB preto 4 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1200',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', }
      ]
    },

    // Product 16 
    {
      id:                  16,
      name:                'Samsung Galaxy A22 Dual SIM 128 GB preto 4 GB RAM',
      slug:                formattedURL('Samsung Galaxy A22 Dual SIM 128 GB preto 4 GB RAM'),
      description:         'Descrição do produto',
      popularity:          '95',
      categorySearch:      'smartphones',
      link:                'https://aaaa',

      precoAntigo:         '1800',
      preco:               '1780',

      numeroParcelas:      '12',
      precoParcelas:       '115',
      loja:                'Americanas',

      semJuros:            true,

      images: [
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
        { url: 'https://i.imgur.com/r2NGbBe.jpg', },
      ]
    },

    //  }Product 
  ]
}