import { Router } from 'express';

import users from './Users';

const router = Router();

router.use('/users', users);

export default router;
