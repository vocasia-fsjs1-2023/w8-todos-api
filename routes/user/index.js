const UserController = require('../../controller/userController');
const router = require("express").Router()

router.get('/', UserController.AddGettodos);
router.get('/:id', UserController.AddGettodosId);
router.post('/', UserController.AddPosttodos);
router.put('/:id', UserController.AddPuttodos);
router.patch('/:id', UserController.AddPatchtodos);
router.delete('/:id', UserController.AddDeletetodos);

module.exports = router;