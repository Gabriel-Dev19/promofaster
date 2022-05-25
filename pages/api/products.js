const dataBase =
[
{
"id": 1653424618357,
"name": "aaaa",
"description": "",
"preco": "",
"popularity": "",
"categorySearch": "",
"precoAntigo": "",
"porcentagemDesconto": "",
"numeroParcelas": "",
"precoParcelas": "",
"semJuros": false,
"link": "",
"images": []
},
{
"id": 1653424746285,
"name": "aaaaa",
"description": "",
"preco": "",
"popularity": "",
"categorySearch": "",
"precoAntigo": "",
"porcentagemDesconto": "",
"numeroParcelas": "",
"precoParcelas": "",
"semJuros": false,
"link": "",
"images": [
{
"url": "https://i.imgur.com/r2NGbBe.jpg",
"alt": "tyntyn"
},
{
"url": "https://i.imgur.com/r2NGbBe.jpg",
"alt": "aaaaaaaaaa"
}
]
},
{
"id": 1653425156760,
"name": "",
"description": "",
"preco": "",
"popularity": "",
"categorySearch": "",
"precoAntigo": "",
"porcentagemDesconto": "",
"numeroParcelas": "",
"precoParcelas": "",
"semJuros": false,
"link": "",
"images": []
},
{
"id": 1653455156760,
"name": "",
"description": "",
"preco": "",
"popularity": "",
"categorySearch": "",
"precoAntigo": "",
"porcentagemDesconto": "",
"numeroParcelas": "",
"precoParcelas": "",
"semJuros": false,
"link": "",
"images": []
},
{
"id": 1653489637758,
"name": "aaaa",
"description": "sssss",
"preco": "",
"popularity": "",
"categorySearch": "",
"precoAntigo": "",
"porcentagemDesconto": "",
"numeroParcelas": "",
"precoParcelas": "",
"semJuros": false,
"link": "",
"images": []
}
]

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.send(dataBase);
      break;
    case 'POST':
      var newProduct = {
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        preco: req.body.preco,
        popularity: req.body.popularity,
        categorySearch: req.body.categorySearch,
        precoAntigo: req.body.precoAntigo,
        porcentagemDesconto: req.body.porcentagemDesconto,
        numeroParcelas: req.body.numeroParcelas,
        precoParcelas: req.body.precoParcelas,
        semJuros: req.body.semJuros,
        link: req.body.link,
        images: req.body.images,
        url: req.body.images.url,
        alt: req.body.images.alt
      };
      dataBase.push(newProduct);
      res.send(dataBase);
      break;
    case 'DELETE':
      const products = dataBase

      for (let i = 0; i <= products.length; i++) {
        // eslint-disable-next-line eqeqeq
        if (products[i].id === req.body) {
          products.splice(i, 1)
          res.json(products)
          break;
        }
      }
      break;
  }
}