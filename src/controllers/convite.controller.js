const convitesService = require('../services/convite.service');// importa o service
const mongoose = require('mongoose'); // importa o mongoose

//todos convite
const findAllconvitesController = async (req, res) => {
  const allconvites = await convitesService.findAllconvitesService();

  if (allconvites.length === 0) {  // validação dos convites
    return res
      .status(404)
      .send({ message: 'No tem nenhum convite cadastrado' });
  }
  res.send({ message: 'Lista com todos os convites!!!', allconvites });
};

// enconta id do convite
const findByIDconviteController = async (req, res) => {
  const idParam = req.params.id;

  const chosenConvite = await convitesService.findByIDconviteService(idParam);
  if (chosenConvite === undefined) {
    res
      .status(404)
      .send({ message: ' Nenhum convite encontrado, verifique o id!!!' });
  } else {
    res.send({
      message: ' convite encontrado com sucesso!!!',
      escolhaConvite: chosenConvite,
    });
  }
};
// criar convite
const createConvitecontroller = async (req, res) => {
  const convite = req.body;

  const newConvite = await convitesService.createConviteService(convite);

  res
    .status(201)
    .send({ message: 'Convite criado com  sucesso!!!', newConvite });
};
//

// editar convite
const updateConvitecontroller = async (req, res) => {
  const parametroId = req.params.id;
  const editeconvite = req.body;
  const updateConvite = await convitesService.updateConviteService(
    parametroId,
    editeconvite,
  );
  res.send({ menssage: 'convite editado com sucesso!!!', updateConvite });
};

// deletar convite
const deleteConvitecontroller = async (req, res) => {
  const idparam = req.params.id;
  await convitesService.deleteConviteService(idparam);
  res.send({ message: 'convite deletado com sucesso!!!' });
};

module.exports = {
  findAllconvitesController,
  findByIDconviteController,
  createConvitecontroller,
  updateConvitecontroller,
  deleteConvitecontroller,
};
