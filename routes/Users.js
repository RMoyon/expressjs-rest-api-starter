import { Router } from 'express';
import UserService from '../services/Users';
import MessageService from '../services/Messages';

const router = Router();

router.get('/', UserService.getUsers);
router.get('/:id', UserService.getUser);
router.post('/', UserService.create);
router.put('/:id', UserService.update);
router.delete('/:id', UserService.remove);

router.get('/:UserId/messages', MessageService.getByUser);
router.post('/:UserId/messages', MessageService.createByUser);
router.delete('/:UserId/messages', MessageService.removeByUser);

export default router;
