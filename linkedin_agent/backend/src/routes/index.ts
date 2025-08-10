import { Router } from 'express';
import { IndexController } from '../controllers';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/', indexController.home);
    app.get('/api/data', indexController.getData);
    // Add more routes as needed
}