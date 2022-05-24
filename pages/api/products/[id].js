const fs = require('fs')
const PRODUCTS_FILE = 'data/dataBase.json'

export default function handler(req, res) {
  fs.readFile(PRODUCTS_FILE, function(err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    var json = JSON.parse(data);

    for(var i = 0; i <= json.length; i++)
    {
        if(json[i].id = req.query)
        {
            res.send(json[i]);
            break;
        }
    }
});
}