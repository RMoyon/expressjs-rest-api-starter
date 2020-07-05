import { Router } from 'express';
import UserService from '../services/Users';

const router = Router();

router.get('/', UserService.getUsers);
router.get('/:id', UserService.getUser);

export default router;
