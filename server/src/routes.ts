import express from 'express'

import multer from "multer";
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const upload = multer(multerConfig)
const pointsController = new PointsController()

const itemsController = new ItemsController();

// padrao de metodos da comunidade
// index - listagem
// show - exibe um unico registro
// create - cria o item
// update - atualiza
// delete - remove

routes.get('/items', itemsController.index)

routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.post('/points', upload.single('image'), pointsController.create)

export default routes;

// Service Pattern
// Repository Pattern