import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

const uristring = process.env.MONGODB_URI || 'mongodb://localhost/reactjs-begin';
mongoose.connect(uristring, (err) => console.log(err ? `ERROR connecting to: ${uristring}. ${err}` : `Succeeded connected to: ${uristring}`));

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'migrations') && (file !== 'seeds.js'))
  .forEach((file) => {
    const model = (require(path.join(__dirname, file)).default)(mongoose);
    db[model.collection.collectionName] = model;
  });

export default db;
