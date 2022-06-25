const convitesService = require('../services/convite.service');

const findAllconvitesController = (req, res) => {
  const convites = convitesService.findAllconvitesService();
  res.send({ message: 'Lista com todos os convites!!!',convites});
};

const findByIDconviteController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaConvite = convitesService.findByIDconviteService(parametroId);
  if (escolhaConvite === undefined) {
    res.send({ message: ' Nenhum convite encontrado!!!' });
  } else {
    res.send({ message: ' convite encontrado com sucesso!!!', escolhaConvite });
  }
};
// criar convite
const createConvitecontroller = (req, res) => {
  const convite = req.body;
  convitesService.createConviteService(convite);

  res.send({ message: 'Convite criado com  sucesso!!!', convite });
};
//

// editar convite
const updateConvitecontroller = (req, res) => {
  const parametroId = Number(req.params.id);
  const conviteEdite = req.body;
  const updateConvite = convitesService.updateConviteService(parametroId, conviteEdite);
  res.send({ menssage: 'convite editado com sucesso!!!', updateConvite});
};

// 

// deletar convite
const deleteConvitecontroller = (req, res) => {
  const idparam = req.params.id;
  convitesService.deleteConviteService(idparam);
  res.send({ message: 'convite deletado com sucesso!!!' });
};

module.exports = {
  findAllconvitesController,
  findByIDconviteController,
  createConvitecontroller,
  updateConvitecontroller,
  deleteConvitecontroller,
};
