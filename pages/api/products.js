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

const PRODUCTS_FILE = '../dataBase.json'
const fs = require('fs')

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      fs.readFile(PRODUCTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.parse(data));
      });
      break;
    case 'POST':
      fs.readFile(PRODUCTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var products = JSON.parse(data);
    
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
        products.push(newProduct);
        fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(products);
        });
      });
      break;
    case 'DELETE':
      fs.readFile(PRODUCTS_FILE, function (err, data) {
        if (err) {
          console.error(err)
          process.exit(1)
        }
        const products = JSON.parse(data)
    
        for (let i = 0; i <= products.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (products[i].id == req.body) {
            products.splice(i, 1)
            fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2), function (err) {
              if (err) {
                console.error(err)
                process.exit(1)
              }
              res.json(products)
            })
            break
          }
        }
      })
      break;
  }
}