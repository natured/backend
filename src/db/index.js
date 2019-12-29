const mongoose = require('mongoose');

// Default name for database
const DB_NAME = 'natured';

// Default options for mongo connection
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

exports.connect = () => {
  mongoose.Promise = global.Promise;

  console.log('connecting to db:', proccess.env.NODE_ENV);

  // Different database configurations based on environment
  switch (process.env.NODE_ENV) {
    case 'prod': {
      mongoose.connect(process.env.MONGODB_URI, options);
      console.log('connected to production database via MONGODB_URI');
    }

    case 'test': {
      // allow testing suite to handle database connection
    }

    default: {
      mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, options);
      console.log(`connected to database: ${DB_NAME}`);
    }
  }
};
