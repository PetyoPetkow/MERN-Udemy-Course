import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel';
import { comparePassword, hashPassword } from '../utils/passwordUtils';
import { UnauthenticatedError } from '../errors/customErrors';
import { Request, Response } from 'express';
import { createJWT } from '../utils/tokenUtils';

export const register = async (req: Request, res: Response) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  req.body.password = await hashPassword(req.body.password);

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};
