
import express,{Application} from 'express'


import config from '../global/environment'

export class Server {

  public app:Application
  public port:number

    constructor(){
      this.app = express()
      this.port = config.SERVER_PORT
    }

    async start(callback:Function){
       await this.app.listen(this.port, callback())
    }
}