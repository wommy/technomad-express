import express from "express"
// import { v4 as uuidv4 } from "uuid"
import todos from "../../database/Todos"

export default express.Router()
  .get("/", (req, res) => res.json(todos))

  .post("/", (req, res) => {
    const newTodo = {
      // id: uuidv4(),
      id: Date.now(),
      category: req.body.category || 'inbox',
      name: req.body.name || '',
      link: req.body.link,
    }
    !newTodo.name && res.status(400).json({ msg: "please include a name" })
    todos.push(newTodo)
    // res.json(todos)
    res.redirect('/')
  })

  // .get("/:id", (req, res) => {
  //   todos.some((todo) => todo.id === req.params.id)
  //     ? res.json(todos.filter((todo) => todo.id === req.params.id))
  //     : res.status(400).json({ msg: `no todo with id of ${req.params.id}` })
  // })
  // .put("/:id", (req, res) => {
  //   todos.some((todo) => todo.id === req.params.id)
  //     ? todos.forEach((t) => {
  //         if (t.id === req.params.id) {
  //           t.isDone = req.body.isDone ? req.body.isDone : t.isDone
  //           t.name = req.body.name ? req.body.name : t.name
  //           t.category = req.body.category ? req.body.category : t.category
  //           res.json({ msg: "todo updated", t })
  //         }
  //       })
  //     : res.status(400).json({ msg: `no todo with id of ${req.params.id}` })
  // })
  // .delete("/:id", (req, res) => {
  //   todos.some((todo) => todo.id === req.params.id)
  //     ? res.json({
  //         msg: "todo deleted",
  //         todos: todos.filter((todo) => todo.id !== req.params.id),
  //       })
  //     : res.status(400).json({ msg: `no todo with id of ${req.params.id}` })
  // })
