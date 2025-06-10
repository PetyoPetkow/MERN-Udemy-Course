import {
  body,
  param,
  ValidationChain,
  validationResult,
} from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants';
import mongoose from 'mongoose';
import JobModel from '../models/JobModel';
import User from '../models/UserModel';
import { request, RequestHandler } from 'express';

const withValidationErrors = (
  validateValues: ValidationChain[]
): RequestHandler[] => {
  return [
    ...validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith('no job')) {
          throw new NotFoundError(errorMessages.join(', '));
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages.join(', '));
      }
      next();
    },
  ];
};

export const validateJobInput: RequestHandler[] = withValidationErrors([
  body('company').notEmpty().withMessage('company is required'),
  body('position').notEmpty().withMessage('position is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('invalid status value'),
  body('jobType')
    .isIn(Object.values(JOB_TYPE))
    .withMessage('invalid type value'),
]);

export const validateIdParam: RequestHandler[] = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('invalid MongoDB Id');

    const job = await JobModel.findById(value);
    if (!job) throw new NotFoundError(`no job with id ${value} was found`);

    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === job.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

export const validateRegisterInput: RequestHandler[] = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 3, max: 32 })
    .withMessage('name should be between 3 and 32 symbols'),
  body('email').isEmail().withMessage('invalid email'),
  body('email').custom(async (email) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('E-mail already in use');
    }
  }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6, max: 24 })
    .withMessage('password should be between 6 and 24 symbols'),
  body('lastName')
    .notEmpty()
    .withMessage('last name is required')
    .isLength({ min: 3, max: 32 })
    .withMessage('last name should be between 3 and 32 symbols'),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateLoginInput: RequestHandler[] = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('name is required')
    .isEmail()
    .withMessage('invalid email'),
  body('password').notEmpty().withMessage('password is required'),
]);
