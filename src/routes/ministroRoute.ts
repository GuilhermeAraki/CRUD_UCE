import { Router } from 'express';
import * as ministroController from '../controllers/ministroController';

const router = Router();

router.get('/', ministroController.list);
router.get('/:id', ministroController.getById);
router.post('/', ministroController.create);
router.put('/:id', ministroController.update);
router.delete('/:id', ministroController.remove);

export default router;