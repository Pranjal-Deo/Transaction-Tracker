const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new transaction
router.post('/', async (req, res) => {
    const { title, amount, category, type } = req.body;

    if (!['expense', 'income'].includes(type)) {
        return res.status(400).json({ message: 'Invalid type' });
    }

    const transaction = new Transaction({
        title,
        amount,
        category,
        type
    });

    try {
        const newTransaction = await transaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
