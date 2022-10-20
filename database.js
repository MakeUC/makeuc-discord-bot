const { MongoClient, ServerApiVersion } = require('mongodb');
const { atlas_uri } = require('./config.json');

const uri = atlas_uri;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(function(error, db) {
	if(error) throw error;
	console.log("MongoDB database connection established successfully");
});

module.exports = client;