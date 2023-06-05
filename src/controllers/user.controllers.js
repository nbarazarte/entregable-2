const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...        
    const user = await User.findAll();
    return res.json(user)
});

const create = catchError(async(req, res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)
});

const getOne = catchError(async(req, res) => {
    // Operaciones...
    const {id} = req.params;
    const oneUser = await User.findByPk(id);
    if(!oneUser) return res.status(404).json({message: "user not found"})
    return res.json(oneUser)    
});

const remove = catchError(async(req, res) => {
    const {id} = req.params;
    const removeUser = await User.destroy({where:{id:id} });    
    if(!removeUser) return res.status(404).json({message: "user not found"})
    return res.sendStatus(204)
});

const update = catchError(async (req, res) => {
    const { id } = req.params
    const userBody = req.body
    
    const userUpdate = await User.update(userBody, { where: { id }, returning: true })
    if(userUpdate[0]=0) return res.status(404).json({ message: "User not found for update"})
    return res.json(userUpdate)    
  })

module.exports = {
    getAll, create, getOne, remove, update
}