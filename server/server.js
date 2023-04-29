<<<<<<< HEAD
=======
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
=======
>>>>>>> c17d1b0 (adding additional code to server.js)
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require ('mongoose');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
<<<<<<< HEAD
=======
>>>>>>> ace7302 (adding additional code to server.js)
>>>>>>> c17d1b0 (adding additional code to server.js)

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});


 // Enable CORS
 app.use(cors());
 

 // Connect to MongoDB
 mongoose.connect('mongodb://localhost:27017/Recipe-For-Success', { useNewUrlParser: true })
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err));
   mongoose.connect('mongoodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w-majority',{
    useNewUrlParser:true,
    useUnifiedToppology:true
});
 
 // Define Review Model
 const Review = mongoose.model('Review', {
   name: String,
   email: String,
   rating: Number,
   comment: String
 });
 
 // Define Routes
 app.post('/api/reviews', (req, res) => {
   const { name, email, rating, comment } = req.body;
   const review = new Review({ name, email, rating, comment });
   review.save()
     .then(() => res.send('Review saved successfully'))
     .catch(err => console.log(err));
 });
 
 server.applyMiddleware({ app});

 db.once('open', () => {
  app.listen(PORT,() =>{
    console.log ('API server running on port ${PORT}!');
    console.log ('Use Graphql at http://localhost:${PORT}$(server:graphqlPath}');

  });
 });



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

<<<<<<< HEAD
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  
  });
});
=======
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
    process.exit(-1);
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
>>>>>>> c17d1b0 (adding additional code to server.js)
