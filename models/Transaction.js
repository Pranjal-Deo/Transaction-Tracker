const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['expense', 'income'],
        required: true
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
