import Model from '../models';

export default {
  index(req, res) {
    const { user } = req;
    res.json({ success: !!user, user });
  },

  login(req, res) {
    const { user = {} } = req.body || {};

    Model.users.login(user)
        .then((rs) => res.json({ success: true, user: rs }))
        .catch((errmsg) => res.json({ success: false, message: errmsg }));
  },

  register(req, res) {
    const { user = {} } = req.body || {};

    Model.users.register(user)
        .then(() => res.json({ success: true }))
        .catch((errmsg) => res.json({ success: false, message: errmsg }));
  },
};
