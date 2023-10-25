const route = require("express").Router()
const todos = require("./todo/index");

route.use('/todos', todos);

module.exports=route;