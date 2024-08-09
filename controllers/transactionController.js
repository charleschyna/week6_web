const Transaction = require('../models/Transaction');

exports.getTransactions = (req, res) => {
  const userId = req.user.id;  // Extracted from JWT
  Transaction.find({ userId }, (err, transactions) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(transactions);
  });
};

// Additional CRUD operations for transactions
