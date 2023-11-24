const express = require('express');
const { knowledgeController } = require('../../app/controllers');
const router = express.Router();

router.get('/', knowledgeController.index);
router.post('/', knowledgeController.create);
router.patch('/:id', knowledgeController.update);
router.delete('/:id', knowledgeController.delete);
module.exports = router;
