import express from 'express'
import path from 'path'
// import logger from './middleware/logger'
import router from './routes/api/todos'

const app = express()
const PORT = process.env.PORT || 5000

// middleware
// app.use(logger)

app
	.use(express.json())
	.use(express.urlencoded({extended:false}))

// static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/todos', router)

app.listen(PORT, ()=> console.log(`server running on port:${PORT}`))