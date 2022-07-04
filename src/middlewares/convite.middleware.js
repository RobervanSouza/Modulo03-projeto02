const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res
      .status(400)
      .send({
        message: 'ID invalido, verifique o ID de seu convite no GET_ALL',
      });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const convite = req.body;
  if (
    !convite ||
    !convite.nome ||
    !convite.descricao ||
    !convite.marca ||
    !convite.quantidade
  ) {
    return res
      .status(400)
      .send({
        message: 'envio incompleto, complete todos os campos do convite.',
      });
  }
  next();
};

module.exports = {
  validObjectBody,
  validId,
};
