const express = require('express');
    const router = express.Router();
    const productRoutes = require('../controller/productcontroller');

    router.post('/', productRoutes.createProduct);
    router.get('/', productRoutes.getProduct);
    router.put('/:id', productRoutes.updateProduct);                     
    router.delete('/:id', productRoutes.deleteProduct);
    router.put('/:id/update-amount', productRoutes.updateAmount);
    router.put('/:id/update-quantity',productRoutes.updateQuanity);

    router.get('/:category', productRoutes.getProductsByCategory);

   // router.get('/get-category', productRoutes.getProductsByCategory);

    module.exports = router;
    