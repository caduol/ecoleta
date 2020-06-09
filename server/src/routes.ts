import express from 'express'

import multer from "multer";
import multerConfig from './config/multer'

import { celebrate, Joi } from 'celebrate'

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

routes.post('/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }),
    pointsController.create)

export default routes;

// Service Pattern
// Repository Pattern