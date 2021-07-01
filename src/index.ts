import express from 'express'
import path from 'path'
import exphbs from 'express-handlebars'
// import logger from './middleware/logger'
import router from './routes/api/todos'
import todos from './database/Todos'

const app = express()
const PORT = process.env.PORT || 5000

// middleware
// app.use(logger)



app
	.engine('handlebars', exphbs())
	.set('views', path.join(__dirname,'views'))
	.set('view engine', 'handlebars')

app
	.use(express.json())
	.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=> res.render('index',{
	title: 'todo app',
	todos
}))

// static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/todos', router)

app.listen(PORT, ()=> console.log(`server running on port:${PORT}`))