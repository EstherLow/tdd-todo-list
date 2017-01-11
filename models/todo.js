const uuidGenerator = require('uuid/v4')

let todos = []

// CREATE - params should be an object with keys for name, description and completed
function create (name, description = '', completed = false) {
  // uuid usage exmaple
  // let uuid = uuidGenerator()
  var instanceOfTodo = {}
  instanceOfTodo.uuid = uuidGenerator();
  instanceOfTodo.id = (todos.length + 1)
    if (name === undefined) {
      console.log('name cannot be undefined');
      return false; }
    instanceOfTodo.name = name;
    instanceOfTodo.description = description
    instanceOfTodo.completed = completed;
  todos.push(instanceOfTodo)
  console.log(todos);
  return true
}
/*
{_id:###,
name: '',
description: ''
completed: false}
*/

// READ (list & show)
function list () {
console.log(typeof todos);
return todos
}


function show (id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      //console.log(todos[i]);
      return todos[i]
    }
  }
  //console.log('null');
  return null
}

// UPDATE - params should be an object with KVPs for the fields to update
function update (id, updatedParams) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      for (var key in updatedParams) {
      if (key === 'name') {
           if ((Object.values(updatedParams).toString().length) < 5 ) {
             //console.log((Object.values(updatedParams).toString().length));
             console.log("Name is not allowed to be empty or have less than 5 characters");
             return false;
              }
           }
         }
      todos[i] = Object.assign({}, todos[i], updatedParams)
      console.log(todos[i]);
      return true;
    }

  }
  console.log('id not found');
  return false;
}



// DESTROY (destroy & destroyAll)
function destroy (id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
      console.log("item id: " + id + " has been deleted." );
      return todos.length;
    }
  }
}

function destroyAll () {
  todos = [];
  console.log('everything deleted');
  return todos.length
}

module.exports = {
  create: create,
  list: list,
  show: show,
  update: update,
  destroy: destroy,
  destroyAll: destroyAll
}
