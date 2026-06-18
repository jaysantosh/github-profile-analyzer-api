const express = require('express');
const router = express.Router();
const AnalyzeProfileController = require('../controllers/AnalyzeProfileController')
const rateLimiter = require('../middlewares/rateLimiter');
const GetAllProfilesController = require('../controllers/GetAllProfilesController');
const SearchProfilesController = require('../controllers/SearchProfilesController');
const GetProfileByNameController = require('../controllers/GetProfileByNameController');

router.post('/analyze/:username', rateLimiter, AnalyzeProfileController);
router.get('/profiles', GetAllProfilesController);
router.get('/profiles/search', SearchProfilesController);
router.get('/profiles/:username', GetProfileByNameController);


module.exports = router;
