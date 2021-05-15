const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping',  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;


// "mongodb+srv://mmcginley:Yougotthis21@cluster1.mkzfu.mongodb.net/mernshopping?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

// @cluster1.mkzfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority