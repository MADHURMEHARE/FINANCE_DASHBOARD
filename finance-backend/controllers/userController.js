const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.updateUserStatus = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.isActive = req.body.isActive;
  await user.save();

  res.json(user);
};