const express = require('express');
const { wordController } = require('../../app/controllers');
const router = express.Router();

router.get('/', wordController.index);
router.post('/', wordController.create);
router.patch('/:id', wordController.update);
router.delete('/:id', wordController.delete);
module.exports = router;
