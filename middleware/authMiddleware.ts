import { Middleware } from 'express-validator/src/base';
import { UnauthenticatedError } from '../errors/customErrors';

export const authenticateUser: Middleware = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) throw new UnauthenticatedError('authentication invalid');

  next();
};
