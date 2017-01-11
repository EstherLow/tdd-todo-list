const assert = require('assert')
const todos = require('../models/todo.js')

// Example Test - we expect that when we run destroyAll, it should return true to let us know it was successful
// We also expect the list should now be empty
//assert.strictEqual(todos.list().length, 0, 'List should be empty after deleting all TODOs')
// expect todos.create to return true if successful
assert.strictEqual(todos.create('case1', 'trying', true), true, 'Create should return true to indicate success.')
assert.strictEqual(todos.create('case2'), true, 'Create should return true to indicate success.')
//assert.strictEqual(todos.create(), false, 'Create should return false to indicate failure.')
//assert.strictEqual((typeof todos.list()),'object' , 'List should return "objects" for typeof todos')
//assert.strictEqual((typeof todos.show(2)), 'object', 'Show should return a object')
//assert.strictEqual(todos.update(2, {description: 'this should be updated'}), true, 'Update should allow param to be updated.')
//assert.strictEqual(todos.update(2, {description: 'updated this again', completed: true}), true, 'Update should allow param to be updated.')
//assert.strictEqual(todos.update(3, {name: 'case3'}), false, 'Id should not exist, hence update should fail.')
//assert.strictEqual(todos.update(2, {name: ''}), false, 'Names should not be blank or less than 5 charaters')
//assert.strictEqual(todos.destroy(2), 1, 'todos should only have 1 item left in the array.')
assert.strictEqual(todos.destroyAll(), 0, 'DestroyAll should return 0, to indicate success')
