const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    heroes: [String],
});

module.exports = mongoose.model('Spot', SpotSchema);