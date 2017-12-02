import Model from '../models';
import { verifyToken } from './jwt';

export const handleError = (res, err) => res.status(err.status).send({ success: false, status: err.status, message: err.message });

export const getUserFromToken = (token) => new Promise((resolve) => {
  Model.users
        .findOne({ tokens: { $elemMatch: { $eq: token } } })
        .then((user) => resolve(user))
        .catch(() => resolve(null));
});

export const cookieExtractor = (req) => {
  let token = null;
  if (req.cookies && req.cookies.token) token = req.cookies.token;
  return req.headers.token || req.query.token || token;
};

export const injectUserToReq = (req, res, next) => {
  const token = cookieExtractor(req);

  verifyToken(token).then(() =>
    getUserFromToken(token)
      .then((user) => {
        if (user) req.user = user.toJson({ token });
        next();
      })
  )
  .catch((err) => {
    console.log('Error in inject user:', err);
    next();
  });
};

export default (req, res, next) => {
  const token = cookieExtractor(req);

  verifyToken(token).then(() => {
    getUserFromToken(token)
      .then((user) => {
        if (!user) {
          handleError(res, {
            code: 401,
            status: 200,
            message: 'Unauthorized',
          });
        } else {
          req.user = user;
          next();
        }
      });
  })
  .catch((err) => {
    console.log('Error in authenticate:', err);
    handleError(res, {
      code: 401,
      status: 200,
      message: err.toString(),
    });
  });
};
