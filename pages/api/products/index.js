const fs = require('fs')
const PRODUCTS_FILE = '../dataBase.json'
const dataBase = [
  {
    id: 'aaaaa'
  }
]

export default function handler(req, res) {
  res.send(JSON.parse(dataBase));
}