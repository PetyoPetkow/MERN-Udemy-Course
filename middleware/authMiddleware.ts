import { Middleware } from 'express-validator/src/base';
import { UnauthenticatedError } from '../errors/customErrors';
import { verifyJWT } from '../utils/tokenUtils';

export const authenticateUser: Middleware = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const user = verifyJWT(token);

    if (typeof user !== 'string')
      req.user = { userId: user?.userId, role: user?.role };

    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};
