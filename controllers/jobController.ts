import { Request, Response } from 'express';
import JobModel from '../models/JobModel.js';
import StatusCodes from 'http-status-codes';

export const getAllJobs = async (req: Request, res: Response) => {
  const jobs = await JobModel.find({});

  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req: Request, res: Response) => {
  const job = await JobModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req: Request, res: Response) => {
  const job = await JobModel.findById(req.params.id);

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req: Request, res: Response) => {
  const updatedJob = await JobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'job edited successfully', job: updatedJob });
};

export const deleteJob = async (req: Request, res: Response) => {
  const removedJob = await JobModel.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: `job deleted successfully`, job: removedJob });
};
