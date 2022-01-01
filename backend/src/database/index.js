import Sequelize  from "sequelize";
import databaseConfig from '../config/database';
import Pessoa from '../models/Pessoa';

const models = [Pessoa];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
