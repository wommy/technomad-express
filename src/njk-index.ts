import path from "path"

// import logger from './middleware/logger'
import todos from "./database/Todos"
import router from "./routes/api/todos"

import express from "express"
import exphbs from "express-handlebars"
// import njk from 'nunjucks'
// import expnjk from 'express-nunjucks'

const PORT = process.env.PORT || 5000
express()

// const app = express()
// njk
// njk.configure('views',{
// 	autoescape: true,
// 	express: app
// })
// .engine('nunjucks', expnjk())
// .set('views', path.join(__dirname,'views'))
// .set('view engine', 'handlebars')
// app

// set views; engine: .hbs
.engine("handlebars", exphbs())
.set("views", path.join(__dirname, "views"))
.set("view engine", "handlebars")

//
// middleware
//

// logger
// .use(logger)

// json and url
.use(express.json())
.use(express.urlencoded({ extended: false }))

// static folder
.use(express.static(path.join(__dirname, "public")))

// todo api router
.use("/api/todos", router)

// index route
.get("/", (req, res) =>
  res.render("index", {
    todos,
    nav: ["all", "todo", "done"],
  })
)

// start serve
.listen(PORT, () => console.log(`server running on port:${PORT}`));
