import express from "express"
import { v4 as uuidv4 } from "uuid"
import todos from "../../database/Todos";

const router = express.Router()

router.get('/', (req,res)=> res.json(todos))

export = router
// export default express.Router()
	// get all todos
	// .get('/', (req,res)=> res.json(todos))
	// get single todo
	// .get('/:id', (req,res)=> {
	// 	todos.some(t => t.id === req.params.id)
	// 		? res.json( todos.filter( todo => todo.id === req.params.id ) )
	// 		: res.status(400).json({ msg: `no Todo.id: ${req.params.id}`})
	// })
	// create todo
	// .post('/', (req,res)=> {
	// 	const newTodo = {
	// 		id: uuidv4(),
	// 		name: req.body.name,
	// 		isDone: req.body.isDone || false
	// 	}
	// 	if(!newTodo.name) return res.status(400).json({ msg: 'todo left blank' })
	// 	todos.push(newTodo)
	// 	res.json(todos)
	// })
	// update todo
	// .put('/:id', (req,res)=> {
	// 	todos.some(t => t.id === req.params.id)
	// 		? todos.forEach(ea => {
	// 			if(ea.id === req.params.id){
	// 				ea.name = req.body.name ? req.body.name : ea.name
	// 				ea.isDone = req.body.isDone ? req.body.isDone : ea.isDone
	// 				res.json({ msg: 'todo updated', ea})
	// 			}
	// 		})
	// 		// res.json( todos.filter( todo => todo.id === req.params.id ) )
	// 		: res.status(400).json({ msg: `no Todo.id: ${req.params.id}`})
	// })
	// delete todo
	// .delete('/:id', (req,res)=> {
	// 	todos.some(t => t.id === req.params.id)
	// 		? res.json({ 
	// 			msg: 'todo deleted', 
	// 			todos: todos.filter( todo => todo.id !== req.params.id ) 
	// 		}) 
	// 		: res.status(400).json({ msg: `no Todo.id: ${req.params.id}`})
	// })