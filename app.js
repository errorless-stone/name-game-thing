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

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use('/public', express.static('public'));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//Level One Page

app.get('/', async (req, res) => {

  client.connect;
  let mongoResult = await client.db("Name-Game-Data").collection("Professor-Info").find().toArray();

  console.log(mongoResult);

  res.render('index', {
    profileData: mongoResult
  })
})

//Level Two Page

app.get('/leveltwo', async (req, res) => {

  client.connect;
  let mongoResult = await client.db("Name-Game-Data").collection("Professor-Info").find().toArray();

  console.log(mongoResult);

  res.render('index2', {
    profileData: mongoResult
    
  })
})

//Level Three Page

app.get('/levelthree', async (req, res) => {

  client.connect;
  let mongoResult = await client.db("Name-Game-Data").collection("Professor-Info").find().toArray();

  console.log(mongoResult);

  res.render('index3', {
    profileData: mongoResult
    
  })
})

app.listen(port, () => console.log(`Server is running...on ${port}`));