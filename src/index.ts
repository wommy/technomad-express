import path from 'path'
import express from 'express'
import exphbs from 'express-handlebars'
// import logger from './middleware/logger'
import todos from './database/Todos'
import router from './routes/api/todos'

const PORT = process.env.PORT || 5000
express()
.set('views', path.join(__dirname,'views'))
.engine('.hbs', exphbs({extname: '.hbs'}))
.set('view engine', '.hbs')

// MIDDLEWARE //
// .use(logger)
.use(express.json())
.use(express.urlencoded({extended:false}))
.use(express.static(path.join(__dirname, 'public')))

// ROUTES //
.use('/api/todos', router)
.get('/', (req,res)=> res.render('index', { 
	todos, 
	nav:['all','todo','done'] 
}))

.listen(PORT, ()=> console.log(`server running on port:${PORT}`))

