const route = require('express').Router();

const controllerconvites = require('../controllers/convite.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/convite.middleware');
route.get('/all-convites', controllerconvites.findAllconvitesController);
route.get(
  '/one-convite/:id',
  validId,
  controllerconvites.findByIDconviteController,
);
route.post(
  '/create-convite',
  validObjectBody,
  controllerconvites.createConvitecontroller,
);
route.put(
  '/update-convite/:id',
  validId,
  validObjectBody,
  controllerconvites.updateConvitecontroller,
);
route.delete(
  '/delete-convite/:id',
  validId,
  controllerconvites.deleteConvitecontroller,
);

module.exports = route;
