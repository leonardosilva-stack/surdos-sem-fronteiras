import dotenv from 'dotenv';

dotenv.config();

import './src/database'

import express from "express";
import cors from "cors";
import homeRoutes from './src/routes/homeRoutes';
import pessoaRoutes from './src/routes/pessoaRoutes';
import tokenRoutes from './src/routes/tokenRoutes';


class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use(cors());
    this.app.use('/', homeRoutes);
    this.app.use('/pessoas/', pessoaRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
