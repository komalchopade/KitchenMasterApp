const express = require('express');
    const router = express.Router();
    const UserController = require('../controller/usercontroller');

    router.post('/', UserController.createUser);
    router.get('/', UserController.getUsers);
    router.get('/:id', UserController.getUserById);
    router.put('/:id', UserController.updateUser);                     
    router.delete('/:id', UserController.deleteUser);
    router.post('/register', UserController.registerUser);
    

   // router.post('/user',UserController.registerUser);

    module.exports = router;