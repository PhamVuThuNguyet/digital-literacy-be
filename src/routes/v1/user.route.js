const express = require('express');
const { userController } = require('../../app/controllers');
const router = express.Router();

router.get('/:id', userController.show);
router.patch('/:id', userController.update);

module.exports = router;
