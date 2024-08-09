const connection = require('../config/db');

// User model
const User = connection.model('User', {
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

module.exports = User;

// Transaction model
const Transaction = connection.model('Transaction', {
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = Transaction;
