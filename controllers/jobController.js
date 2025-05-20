import JobModel from '../models/JobModel.js';
import StatusCodes from 'http-status-codes'

export const getAllJobs = async (req, res) => {
  const jobs = await JobModel.find({})
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await JobModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;

  const job = await JobModel.findById(id)
  if(!job){
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id} was found` });
  }

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if(!updatedJob){
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id} was found` });
  }

  res.status(StatusCodes.OK).json({ msg: 'job edited sucessfully', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const {id} = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id)

  if(!removedJob){
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id} was found` });
  }

  res.status(StatusCodes.OK).json({ msg: `job deleted successfully`, job: removedJob });
};