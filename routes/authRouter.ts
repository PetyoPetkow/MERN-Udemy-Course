import { Router } from 'express';

const router = Router();

import { login, register } from '../controllers/authController';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware';
import { logout } from '../controllers/jobController';

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout);

export default router;
