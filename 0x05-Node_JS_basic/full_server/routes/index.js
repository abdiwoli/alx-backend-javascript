import AppController from '../controllers/AppController.js';
import express from 'express';

const route = express.Router();

route.get('/', AppController.getHomepage);


export default route;
