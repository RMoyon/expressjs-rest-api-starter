import { Router } from 'express';

import users from '../controllers/Users';

const router = Router();

router.use('/users', users);

export default router;
