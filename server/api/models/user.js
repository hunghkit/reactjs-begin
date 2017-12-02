import md5 from 'md5';
import { generateToken } from '../heplers/jwt';

export default (mongoose) => {
  const Schema = new mongoose.Schema({
    name: { type: String, trim: true },
    tokens: { type: Array, default: [] },
    password: { type: String, trim: true },
    username: { type: String, trim: true, unique: true },
  }, {
    timestamps: true,
  });

  const publicField = ['name', 'username'];
  const formatJson = (user = {}, extra = {}) => publicField.reduce((obj, field) => ({ ...obj, [field]: user[field] }), { ...extra });

  // Do not declare methods using ES6 arrow functions (=>).
  // Arrow functions explicitly prevent binding this, so your method will not have access to the document and the above examples will not work.

  Schema.statics.login = function ({ username, password }) {
    return new Promise((resolve, reject) => {
      this.findOne({ username, password: md5(password) })
          .then((user) => {
            if (!user) {
              reject('Username or password is invalid');
            } else {
              const { _id: id } = user;
              const token = generateToken({ id });
              const tokens = [...user.tokens, token];
              user.update({ tokens })
                  .then(() => resolve(user.toJson({ token })))
                  .catch((err) => reject(err));
            }
          })
          .catch((err) => reject(err));
    });
  };

  Schema.statics.register = function ({ name, username, password }) {
    return new Promise((resolve, reject) => {
      this.findOne({ username })
          .then((user) => {
            if (user) throw new Error('Username has been taken');
            return this.create({ name, username, password: md5(password) });
          })
          .then((user) => resolve(user))
          .catch((err) => reject(err.toString()));
    });
  };

  Schema.methods.toJson = function (extra = {}) {
    return formatJson(this, extra);
  };

  return mongoose.model('User', Schema);
};
