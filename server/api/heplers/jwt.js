import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.SECRET || 'CRBeL8o5JZsLOG4OFcjqWpr';

export const generateToken = (data) => jwt.sign(data, JWT_SECRET);

export const verifyToken = (token) => new Promise((resolve, reject) => {
  if (!token) return reject('Token is null or expired');
  return jwt.verify(token, JWT_SECRET, (err, decoded) => (err || !decoded) ? reject(err) : resolve(decoded));
});
