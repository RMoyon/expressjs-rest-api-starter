import { Router } from 'express';
import MessageService from '../services/Messages';

const router = Router();

router.get('/', MessageService.getAll);
router.get('/:id', MessageService.getOne);
router.put('/:id', MessageService.update);
router.delete('/:id', MessageService.remove);

export default router;
