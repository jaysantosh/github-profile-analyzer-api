const express = require('express');
const router = express.Router();
const controller = require('../controllers/profileController');

router.post('/analyze/:username', controller.analyzeProfile);
router.get('/profiles', controller.getAllProfiles);
router.get('/profiles/:username', controller.getProfileByUsername);


module.exports = router;
