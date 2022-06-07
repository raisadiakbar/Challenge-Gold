const router = require('express').Router();
const orderController = require('../controllers/orders.controller');

router.get('/', orderController.getAllorder);
router.get('/:id', orderController.getByID);
router.put('/:id', orderController.updateorder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;