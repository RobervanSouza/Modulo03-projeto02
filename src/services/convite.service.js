

const convites = [
  {
    id: 1,
    nome: 'convite para casamento',
    descricao: 'feito em papel offset',
    marca: 'perola negra convites',
  },
  {
    id: 2,
    nome: 'convite 15 anos',
    descricao: 'feito em papel offset',
    marca: 'perola negra convites',
  },
  {
    id: 3,
    nome: 'convite aniversario 60 anos',
    descricao: 'feito em papel offset',
    marca: 'perola negra convites',
  },
];

let indexNumber = convites.length +1;

const findAllconvitesService = () => {
  return convites;
};

const findByIDconviteService = (parametroId) => {
  return convites.find((convite) => convite.id === parametroId);
};

const createConviteService = (newConvite) => {
  
  newConvite.id = indexNumber;
  indexNumber++;
  convites.push(newConvite);
  return newConvite;
};

const updateConviteService = (id, conviteEdite) => {
  conviteEdite['id'] = id;
  const conviteIndex = convites.findIndex((convite) => convite.id === id);
  convites[conviteIndex] = conviteEdite;
  return conviteEdite;
};

const deleteConviteService = (id) => {
  const conviteIndex = convites.findIndex((convite) => convite.id == id);
  return convites.splice(conviteIndex, 1);
};

module.exports = {
  findAllconvitesService,
  findByIDconviteService,
  createConviteService,
  updateConviteService,
  deleteConviteService,
};
