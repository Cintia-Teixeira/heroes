const mongoose = require('mongoose');

const AddSchema = new mongoose.Schema({
    heroe: String,
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Add', AddSchema);