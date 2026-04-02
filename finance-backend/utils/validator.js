exports.validateRecord = (data) => {
  if (!data.amount || data.amount <= 0) {
    return "Invalid amount";
  }
  if (!['income', 'expense'].includes(data.type)) {
    return "Invalid type";
  }
  return null;
};