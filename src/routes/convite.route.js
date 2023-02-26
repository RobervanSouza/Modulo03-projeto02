const route = require('express').Router();

const controllerconvites = require('../controllers/convite.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/convite.middleware');
route.get('/teste', controllerconvites.findAllconvitesController);
route.get(
  '/convite/:id',
  validId,
  controllerconvites.findByIDconviteController,
);
route.post(
  '/create-convite',
  validObjectBody,
  controllerconvites.createConvitecontroller,
);
route.put(
  '/editar/:id',
  validId,
  validObjectBody,
  controllerconvites.updateConvitecontroller,
);
route.delete(
  '/delete/:id',
  validId,
  controllerconvites.deleteConvitecontroller,
);

module.exports = route;
