const BukuController = require('../../controllers/bukuController');
const router = require('express').Router();

router.get('/', BukuController.getBuku);
router.post('/', BukuController.addBuku);
router.get('/:id', BukuController.getById);
router.put('/:id', BukuController.updateData);
router.patch('/:id', BukuController.updateStatus);
router.delete('/:id', BukuController.deleteData);

module.exports = router;