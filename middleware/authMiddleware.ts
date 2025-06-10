import { Middleware } from 'express-validator/src/base';
import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors';
import { verifyJWT } from '../utils/tokenUtils';
import { NextFunction, Request, Response } from 'express';

export const authenticateUser: Middleware = (req, res, next) => {
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

export const authorizePermissions = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new UnauthorizedError('User not authenticated');
    }

    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};
