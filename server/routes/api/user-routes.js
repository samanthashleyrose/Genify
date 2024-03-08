const router = require('express').Router();
const {
  signup,
  login,
} = require('../../controllers/user-controllers');

const { authMiddleware } = require('../../utils/auth');

router.route('/signup').post(signup).put(authMiddleware);

router.route('/login').post(login);

module.exports = router;