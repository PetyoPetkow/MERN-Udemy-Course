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
  const {company, position} = req.body;

  if(!company || !position){
    return res.status(400).json({ msg: 'please provide company and position' });
  }

  const {id} = req.params;
  const job = jobs.find((job) => job.id === id);

  if(!job){
    return res.status(404).json({ msg: `no job with id ${id} was found` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ msg: 'job edited sucessfully', job });
};

export const deleteJob = async (req, res) => {
  const {id} = req.params;
  const job = jobs.find((job)=> job.id === id);

  if(!job){
    return res.status(404).json({ msg: `no job with id ${id} was found` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: `job deleted successfully` });
};