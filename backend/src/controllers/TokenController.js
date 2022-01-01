import Pessoa from '../models/Pessoa';
import jwt from 'jsonwebtoken';

class TokenController{
  async store(req,res){
    const {email = '', password = ''} = req.body;

    if(!email || !password) {
      return res.status(401).json({
        erros:['Credenciais inválidas'],
      })
    }

    const pessoa = await Pessoa.findOne({where: { email } });

    if(!pessoa) {
      return res.status(401).json({
        erros:['Usuario não existe'],
      })
    }

    if(!(await pessoa.passwordIsValid(password))){
      return res.status(401).json({
        erros:['Senha inválida'],
      })
    }

    const {id} = pessoa;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    const pessoaZ = {
      "token": token,
      "email": email,
      "nome": pessoa.nome,
      "id": pessoa.id
    }


    res.json(pessoaZ);
  }

  // async function isAuthenticate (token) {
  //   const qualquerCoisa = jwt.verify(token)
  // }
}

export default new TokenController();
