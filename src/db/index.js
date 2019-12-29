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

  // Different database configurations based on environment
  switch (process.env.NODE_ENV) {
    case 'prod': {
      mongoose.connect(process.env.DB_URI, options);
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
