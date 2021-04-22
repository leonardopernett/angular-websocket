import {Server} from './class/server'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
/* router */
import indexRouter from './routes/router'

/* object server */
const server = new Server();
/* middleware */
server.app.use(morgan('dev'))
server.app.use(bodyParser.json())
server.app.use(bodyParser.urlencoded({extended:true}))
server.app.use(cors({origin:'http://localhost:4200'}))
server.app.use(helmet())

server.app.use(indexRouter)

server.start(()=>{
  console.log(`server on port ${server.port}`)
}) 


 