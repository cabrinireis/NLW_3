
import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesControllers';
import multer from 'multer';
import uploadConfig from './config/uploads';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages',upload.array('images'), OrphanagesController.create)

export default routes