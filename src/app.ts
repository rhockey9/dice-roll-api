import * as path from 'path';
import * as express from 'express';
//import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import DiceGameRouter from './routes/DiceGameRouter';
import CardGameRouter from './routes/CardGameRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    //this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.get('/', (req, res, next) => {
      res.json({
        message: 'Welcome go dice roll game api'
      });
    });
    this.express.use('/', router);
    this.express.use('/api/dice', DiceGameRouter);
    this.express.use('/api/card', CardGameRouter);
  }

}

export default new App().express;























// import * as express from "express";  
// import * as bodyParser from "body-parser";  
// import * as methodOverride from "method-override";

// let app: express.Application = express();  
// app.use(bodyParser.urlencoded({ extended: true }));  
// app.use(bodyParser.json());  
// app.use(methodOverride());

// app.get('/', (req, res) => {  
//     res.send('Welcome go dice roll game api');
// });

// export default app;