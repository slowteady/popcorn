const express = require('express');
const { registerUser, loginUser, logoutUser, authUser, updateProfile } = require('../controllers/userController');
const { auth } = require('../middleware/auth');
const upload = require('../middleware/uploadFiles');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);
router.get('/auth', auth, authUser);
router.post('/auth', auth, authUser);
router.patch('/update/:userId', upload.single('image'), updateProfile);

module.exports = router;
