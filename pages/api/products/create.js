const fs = require('fs')
const PRODUCTS_FILE = 'pages/api/dataBase.json'

export default function handler(req, res) {
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
}