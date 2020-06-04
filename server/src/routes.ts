import express from 'express'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();

const pointsController = new PointsController()

const itemsController = new ItemsController();

// padrao de metodos da comunidade
// index - listagem
// show - exibe um unico registro
// create - cria o item
// update - atualiza
// delete - remove

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)


export default routes;

// Service Pattern
// Repository Pattern