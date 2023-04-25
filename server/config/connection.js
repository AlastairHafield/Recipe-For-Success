const mongoose = require("mongoose");

<<<<<<< HEAD

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-shopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
=======
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-shopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

//|| 'mongodb://127.0.0.1:27017/mernshopping',
>>>>>>> 6c939bf (apollo issues solved, jwt working, stripe working)
