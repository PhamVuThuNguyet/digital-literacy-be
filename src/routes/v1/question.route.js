const express = require('express');
const { questionController } = require('../../app/controllers');
const router = express.Router();

router.get('/', questionController.index);
router.post('/', questionController.create);
router.patch('/:id', questionController.update);
router.delete('/:id', questionController.delete);

module.exports = router;
