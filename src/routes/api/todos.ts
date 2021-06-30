import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import todos from '../../database/Todos'

export default express.Router()
	.get('/', (req,res)=> res.json(todos))
	.get('/:id', (req,res)=> {
		todos.some(todo => todo.id === req.params.id)
		? res.json(todos.filter( todo => todo.id === req.params.id))
		: res.status(400).json({msg:`no todo with id of ${req.params.id}`})
	})
	.post('/', (req,res)=>{
		const newTodo = {
			id: uuidv4(),
			name: req.body.name,
			isDone: req.body.isDone || false
		}
		if(!newTodo.name) {
			return res.status(400).json({msg:'please include a name'})
		}
		todos.push(newTodo)
		res.json(todos)
	})
	.put('/:id', (req,res)=> {
		todos.some(todo => todo.id === req.params.id)
		? todos.forEach( t => {
			if(t.id === req.params.id){
				t.name = req.body.name ? req.body.name : t.name
				t.isDone = req.body.isDone ? req.body.isDone : t.isDone
				res.json({msg:'todo updated', t})
			}
		})
		: res.status(400).json({msg:`no todo with id of ${req.params.id}`})
	})
	.delete('/:id', (req,res)=> {
		todos.some(todo => todo.id === req.params.id)
		? res.json({
			msg:'todo deleted', 
			todos: todos.filter( todo => todo.id !== req.params.id)
		})
		: res.status(400).json({msg:`no todo with id of ${req.params.id}`})
	})