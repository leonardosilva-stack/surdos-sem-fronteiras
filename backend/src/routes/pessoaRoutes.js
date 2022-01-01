import { Router } from 'express';
import PessoaController from '../controllers/PessoaController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/',  PessoaController.index);
router.get('/:id', loginRequired, PessoaController.show);

router.post('/', PessoaController.store);
router.put('/', loginRequired, PessoaController.update);

export default router;
