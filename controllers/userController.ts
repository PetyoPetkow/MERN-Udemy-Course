import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel';
import Job from '../models/JobModel';
import { RequestHandler } from 'express';

export const getCurrentUser: RequestHandler = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'getCurrentUser' });
};

export const getApplicationStats: RequestHandler = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'getApplicationStats' });
};

export const updateUser: RequestHandler = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'updateUser' });
};
