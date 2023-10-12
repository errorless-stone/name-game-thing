require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { ObjectId } = require('mongodb')
const port = (process.env.PORT || 5500)
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', async (req, res) => {

  client.connect;
  let mongoResult = await client.db("Papa-Parade-Parrot").collection("ProjectOne").find().toArray();

  console.log(mongoResult);

  res.render('index', {
    profileData: mongoResult
  })
})

app.post('/updateProfile', async (req, res) => {

  try {
    //get the new dev name
    console.log("body: ", req.body)
    console.log("user Name: ", req.body.devName)

    client.connect;
    const collection = client.db("Papa-Parade-Parrot").collection("ProjectOne");

    // put it into mongo
    let result = await collection.findOneAndUpdate(
      { _id: new ObjectId(req.body.devId) },
      { $set: { devName: req.body.devName } })
      .then(result => {
        console.log(result);
        res.redirect('/');
      })
      .catch(error => console.error(error))


  }
  finally {
    //client.close()
  }
})

app.post('/insertProfile', async (req, res) => {

  try {
    //get the new dev name
    console.log("body: ", req.body)
    console.log("user Name: ", req.body.devName)

    client.connect;
    const collection = client.db("Papa-Parade-Parrot").collection("ProjectOne");

    // put it into mongo
    let result = await collection.insertOne(
      { devName: req.body.newDevName })
      .then(result => {
        console.log(result);
        res.redirect('/');
      })
      .catch(error => console.error(error))


  }
  finally {
    //client.close()
  }
})

app.post('/deleteProfile', async (req, res) => {

  try {
    //get the new dev name
    console.log("body: ", req.body)
    console.log("user Name: ", req.body.devName)

    client.connect;
    const collection = client.db("Papa-Parade-Parrot").collection("ProjectOne");

    // put it into mongo
    let result = await collection.findOneAndDelete(
      { _id: new ObjectId(req.body.devId) })
      .then(result => {
        console.log(result);
        res.redirect('/');
      })
      .catch(error => console.error(error))


  }
  finally {
    //client.close()
  }
})

app.listen(port, () => console.log(`Server is running...on ${port}`));