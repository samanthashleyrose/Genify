const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  // SIGN UP: creates a user, assigns a token, and sends it back
  async signup ({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // LOG IN: logs in a user, assigns a token, and send it back
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials. User does not exist." });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Invalid credentials. Incorrect password.' });
    }
    const token = signToken(user);
    res.json({ token, user });
  }
};