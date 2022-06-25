const route = require('express').Router();

const controllerconvites = require('../controllers/convite.controller')

route.get('/todos-convites', controllerconvites.findAllconvitesController);
route.get('/convite/:id', controllerconvites.findByIDconviteController);
route.post('/create', controllerconvites.createConvitecontroller);
route.put('/update/:id', controllerconvites.updateConvitecontroller);
route.delete('/delete/:id', controllerconvites.deleteConvitecontroller);



module.exports = route;
