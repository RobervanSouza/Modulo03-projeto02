const Convites = require('../models/Convite'); // importa  o models

// todos os convites
const findAllconvitesService = async () => {
  const allconvites = await Convites.find();
  return allconvites;
};

// encontra o id do convite
const findByIDconviteService = async (idParam) => {
  const oneconvite = await Convites.findById(idParam);
  return oneconvite;
};

// criar convite
const createConviteService = async (newConvite) => {
  const createconvite = await Convites.create(newConvite);
  return createconvite;
};

// editar convites
const updateConviteService = async (idParam, editedconvite) => {
  const updateConvite = await Convites.findByIdAndUpdate(
    idParam,
    editedconvite,
  ).setOptions({ returnOriginal: false });
  return updateConvite;
};

// delete convite
const deleteConviteService = async (idParam) => {
  return await Convites.findByIdAndDelete(idParam);
};

module.exports = {
  findAllconvitesService,
  findByIDconviteService,
  createConviteService,
  updateConviteService,
  deleteConviteService,
};
