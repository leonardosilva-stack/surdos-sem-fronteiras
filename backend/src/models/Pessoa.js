import Sequelize, {
  Model
} from 'sequelize';

import bcryptjs from 'bcryptjs';

export default class Pessoa extends Model {
  static init(sequelize) {
    super.init({
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 255],
              msg: 'Campo nome deve ter entre 4 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
            isUnique(value, next) {
              Pessoa.findOne({ where: { email: value } })
                .then((pessoa) => {
                  if (pessoa) {
                    return next('E-mail já existe, tente outro!');
                  }
                  return next();
                })
                .catch((err) => next(err));
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha precisa ter entre 6 e 50 caracteres',
            },
          },
        }
      },


      {
        sequelize,
      })


      this.addHook('beforeSave', async (pessoa) =>{
        if(pessoa.password){
          pessoa.password_hash = await bcryptjs.hash(pessoa.password, 8);
        }
      });

    return this;
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }
}
