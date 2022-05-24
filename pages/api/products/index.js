const fs = require('fs')
const PRODUCTS_FILE = 'pages/json/dataBase.json'

export default function handler(req, res) {
  fs.readFile(PRODUCTS_FILE, function(err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    res.send(JSON.parse(data));
  });
}