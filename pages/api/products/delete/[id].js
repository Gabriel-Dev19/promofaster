const fs = require('fs')
const PRODUCTS_FILE = 'pages/json/dataBase.json'

export default function handler(req, res) {
  fs.readFile(PRODUCTS_FILE, function (err, data) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    const products = JSON.parse(data)

    for (let i = 0; i <= products.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (products[i].id = req.query) {
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
}