export default (mongoose) => {
  const Schema = new mongoose.Schema({
    title: { type: String, trim: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  }, {
    timestamps: true,
  });

  return mongoose.model('Task', Schema);
};
