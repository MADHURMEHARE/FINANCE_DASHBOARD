const Record = require('../models/Record');

exports.createRecord = async (req, res) => {
  try {
    const { amount, type } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Missing fields" });
    }

    if (amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(record);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ ADD THIS
exports.getRecords = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const { type, category } = req.query;

   let filter = { isDeleted: false };

    // ✅ Filtering
    if (type) filter.type = type;
    if (category) filter.category = category;

    // ✅ Pagination + Filter
    const records = await Record.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    // ✅ Total count (for frontend)
    const total = await Record.countDocuments(filter);

    res.json({
      totalRecords: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: records
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ ADD THIS
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    if (req.body.amount && req.body.amount <= 0) {
  return res.status(400).json({ message: "Invalid amount" });
}

    Object.assign(record, req.body);
    await record.save();

    res.json(record);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ ADD THIS
exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    record.isDeleted = true;
    await record.save();

    res.json({ message: "Record soft deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};