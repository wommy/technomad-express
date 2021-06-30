import express from "express";
import path from "path";
import router from "./routes/api/todos";
// import logger from "./middleware/logger";

const app = express()
const PORT = process.env.PORT || 5000

// middleware
// app.use( logger )
// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// static/
app.use(express.static(path.join(__dirname, 'public')))

// routes/API/todos
app.use('/api/todos', router)

// app.get('/', ( req,res )=> res.send('wom'))
app.get('/', ( req,res )=> {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, ()=> console.log(`server running on port:${PORT}`))