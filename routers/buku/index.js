const BukuController = require('../../controllers/bukuController');
const router = require('express').Router();

router.get('/', BukuController.getBuku);
router.post('/', BukuController.addBuku);

module.exports = router;