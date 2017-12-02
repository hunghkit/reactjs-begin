export default (mongoose) => {
  const Schema = new mongoose.Schema({
    title: { type: String, trim: true },
  }, {
    timestamps: true,
  });

  return mongoose.model('Task', Schema);
};
