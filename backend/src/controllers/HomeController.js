import Pessoa from '../models/Pessoa';

class HomeController{
  async index(req,res){
    const novaPessoa = await Pessoa.create({
      nome: 'Leando',
      email: 'leonardo@leonardo.com',
      senha: 'leo123',
      telefone: 123,
      celular: 456,
      data_nascimento: '1998-10-29 00:00:00',
    })
    res.json(novaPessoa);
  }
}

export default new HomeController();
