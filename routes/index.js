import { Router } from 'express';

import users from './Users';
import Messages from './Messages';

const router = Router();

router.use('/users', users);
router.use('/messages', Messages);

export default router;
