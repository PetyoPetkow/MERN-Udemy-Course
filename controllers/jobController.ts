import { RequestHandler } from 'express';
import JobModel from '../models/JobModel';
import StatusCodes from 'http-status-codes';

export const getAllJobs: RequestHandler<{
  readonly user: { userId: string };
}> = async (req, res) => {
  const jobs = await JobModel.find({ createdBy: req.user?.userId });

  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob: RequestHandler = async (req, res) => {
  req.body.createdBy = req.user?.userId;
  const job = await JobModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById: RequestHandler = async (req, res) => {
  const job = await JobModel.findById(req.params.id);

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob: RequestHandler = async (req, res) => {
  const updatedJob = await JobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'job edited successfully', job: updatedJob });
};

export const deleteJob: RequestHandler = async (req, res) => {
  const removedJob = await JobModel.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: `job deleted successfully`, job: removedJob });
};

export const logout: RequestHandler = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
};
