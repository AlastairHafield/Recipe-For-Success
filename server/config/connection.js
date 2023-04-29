const mongoose = require("mongoose");

<<<<<<< HEAD
<<<<<<< HEAD

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-shopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
=======
=======
mongoose.set("useFindAndModify", false);
>>>>>>> 3931e9d (trying to fix server)
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-shopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
<<<<<<< HEAD

//|| 'mongodb://127.0.0.1:27017/mernshopping',
>>>>>>> 6c939bf (apollo issues solved, jwt working, stripe working)
=======
>>>>>>> 384f1e4 (fixed errors in type defs)
