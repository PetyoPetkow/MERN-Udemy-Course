import jwt from 'jsonwebtoken';

export const createJWT = (payload: string | Buffer | object) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not defined');
  }

  const token = jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};
