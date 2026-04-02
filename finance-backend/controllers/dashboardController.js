const Record = require('../models/Record');

exports.getSummary = async (req, res) => {
  const records = await Record.find();

  let income = 0, expense = 0;
  let category = {};

  records.forEach(r => {
    if (r.type === 'income') income += r.amount;
    else expense += r.amount;

    category[r.category] = (category[r.category] || 0) + r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
    categoryBreakdown: category
  });
};