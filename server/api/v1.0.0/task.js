import Model from '../models';

export default {
  index: (req, res) => {
    const { _id: createdBy } = req.user || {};

    Model.tasks.find({ createdBy })
      .sort({ createdAt: 'desc' })
      .then((tasks) => res.json({ success: true, tasks }))
      .catch((error) => res.json({ success: false, error }));
  },

  create(req, res) {
    const { task = {} } = req.body || {};
    const { _id: createdBy } = req.user || {};

    const newTask = new Model.tasks({ title: task.title, createdBy, updatedBy: createdBy });
    newTask.save()
      .then((rs) => res.json({ success: true, task: rs }))
      .catch((error) => res.json({ success: false, error }));
  },

  update(req, res) {
    const { _id } = req.params;
    const { _id: updatedBy } = req.user || {};

    Model.tasks.findOne({ _id })
      .then((rs) => {
        const { task = {} } = req.body || {};
        rs.title = task.title || rs.title;
        rs.updatedBy = updatedBy;
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
