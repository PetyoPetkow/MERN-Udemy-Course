import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel';
import Job from '../models/JobModel';
import { RequestHandler } from 'express';

export const getCurrentUser: RequestHandler = async (req, res) => {
  const user = await User.findById(req.user?.userId);
  res.status(StatusCodes.OK).json({ user });
};

export const getApplicationStats: RequestHandler = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();

  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser: RequestHandler = async (req, res) => {
  const user = { ...req.body };
  delete user.password;
  console.log(user);
  await User.findByIdAndUpdate(req.user?.userId, user);
  res.status(StatusCodes.OK).json({ msg: 'updateUser' });
};
