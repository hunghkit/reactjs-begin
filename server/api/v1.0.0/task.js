const Model = require('../models');

module.exports = {
  index: (req, res) => {
    Model.tasks.find({})
      .sort({ createdAt: 'desc' })
      .then((tasks) => res.json({ success: true, tasks }))
      .catch((error) => res.json({ success: false, error }));
  },

  create(req, res) {
    const { task = {} } = req.body || {};

    const newTask = new Model.tasks({ title: task.title });
    newTask.save()
      .then((rs) => res.json({ success: true, task: rs }))
      .catch((error) => res.json({ success: false, error }));
  },

  update(req, res) {
    const { _id } = req.params;

    Model.tasks.findOne({ _id })
      .then((rs) => {
        const { task = {} } = req.body || {};
        rs.title = task.title || rs.title;
        return rs.save();
      })
      .then((rs) => res.json({ success: true, task: rs }))
      .catch((error) => res.json({ success: false, error }));
  },

  destroy(req, res) {
    const { _id } = req.params;

    Model.tasks.findOne({ _id })
      .then((rs) => rs.remove())
      .then((rs) => res.json({ success: true, task: rs }))
      .catch((error) => res.json({ success: false, error }));
  },
};
