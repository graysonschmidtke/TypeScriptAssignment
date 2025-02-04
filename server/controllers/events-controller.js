const events = require('../data/events.json')

exports.eventsGetAll = async (req, res) => {
  res.json(events)
}
