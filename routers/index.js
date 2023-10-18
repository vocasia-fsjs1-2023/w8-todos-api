const router = require('express').Router();
const bukuRouter = require('./buku/index');

router.use('/todos', bukuRouter); 

module.exports = router;