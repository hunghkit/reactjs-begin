export const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = 'Username can\'t be blank';
  if (!values.password) errors.password = 'Password can\'t be blank';
  return errors;
};
