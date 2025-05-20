import JobModel from '../models/JobModel.js';

export const getAllJobs = async (req, res) => {
  const jobs = await JobModel.find({})
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await JobModel.create(req.body)
  res.status(201).json({ job });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;

  const job = await JobModel.findById(id)
  if(!job){
    return res.status(404).json({ msg: `no job with id ${id} was found` });
  }

  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if(!updatedJob){
    return res.status(404).json({ msg: `no job with id ${id} was found` });
  }

  res.status(200).json({ msg: 'job edited sucessfully', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const {id} = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id)

  if(!removedJob){
    return res.status(404).json({ msg: `no job with id ${id} was found` });
  }

  res.status(200).json({ msg: `job deleted successfully`, job: removedJob });
};