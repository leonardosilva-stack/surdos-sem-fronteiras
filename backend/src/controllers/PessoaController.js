import Pessoa from '../models/Pessoa';

class PessoaController{
  async store(req,res){
    try {
      const novaPessoa = await Pessoa.create(req.body)
      const { id, nome, email} = novaPessoa;
      return res.status(200).json({ id, nome, email});
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res){
    try{
      const pessoas = await Pessoa.findAll( {attributes: ['id', 'nome', 'email'] });
      return res.json(pessoas);
    } catch (e){
      return res.json(null);
    }
  }

  async show(req, res){
    try{
      const pessoa = await Pessoa.findByPk(req.params.id);
      const { id, nome, email } = pessoa;
      return res.json({ id, nome, email });
    } catch (e){
      return res.json(null);
    }
  }

  async update(req, res){
    try{
      const pessoa = await Pessoa.findByPk(req.pessoaId);

      if(!pessoa){
        return res.status(400).json({
          errors: ['Pessoa não existe'],
        });
      }

      const novosDados = await pessoa.update(req.body);
      const { id, nome, email} = novosDados;
      return res.json({ id, nome, email});
    } catch (e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new PessoaController();
