import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = express.Router();

// the get Routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/users/me', UsersController.getMe);

// the post Routes
router.post('/users', UsersController.postNew);

module.exports = router;
