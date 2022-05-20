const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

async function getProducts(req,res){
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      // fetch the posts
      let products = await db
          .collection('products')
          .find({})
          .sort({})
          .toArray();
      // return the products
      return res.json(JSON.parse(JSON.stringify(products)));
  } catch (error) {
      // return the error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

async function addProduct(req, res) {
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      // add the post
      await db.collection('products').insertOne(JSON.parse(req.body));
      // return a message
      return res.json({
          message: 'Post added successfully',
          success: true,
      });
  } catch (error) {
      // return an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

async function deleteProduct(req, res) {
  try {
      // Connecting to the database
      let { db } = await connectToDatabase();

      // Deleting the post
      await db.collection('products').deleteOne({
          _id: new ObjectId(req.body),
      });

      // returning a message
      return res.json({
          message: 'Post deleted successfully',
          success: true,
      });
  } catch (error) {

      // returning an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getProducts(req, res);
        }

        case 'POST': {
            return addProduct(req, res);
        }

        case 'PUT': {
            return updateProduct(req, res);
        }

        case 'DELETE': {
            return deleteProduct(req, res);
        }
    }
}