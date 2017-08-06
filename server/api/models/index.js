const mongoose = require('mongoose');
const uristring = process.env.MONGODB_URI || 'mongodb://localhost/reactjs-begin'

mongoose.connect(uristring, (err, res) => {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err)
  } else {
    console.log('Succeeded connected to: ' + uristring)
  }
})

const TaskSchema = new mongoose.Schema({
  title: { type: String, trim: true },
}, {
  timestamps: true
})

const tasks = mongoose.model('Task', TaskSchema);

module.exports = {
  tasks,
};
