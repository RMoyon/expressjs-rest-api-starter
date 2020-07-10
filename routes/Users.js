import { Router } from 'express';
import UserService from '../services/Users';
import MessageService from '../services/Messages';

const router = Router();

router.get('/', UserService.getUsers);
router.get('/:id', UserService.getUser);
router.post('/', UserService.create);
router.put('/:id', UserService.update);

router.get('/:id/messages', MessageService.getUserMessages);

export default router;
