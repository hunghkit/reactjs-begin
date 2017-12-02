export const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = 'Name can\'t be blank';
  if (!values.username) errors.username = 'Username can\'t be blank';
  if (!values.password) errors.password = 'Password can\'t be blank';
  if (!values.confirmPassword) errors.confirmPassword = 'Confirm password can\'t be blank';
  if (values.password !== values.confirmPassword) {
    errors.password = 'Password don\'t match';
    errors.confirmPassword = 'Password don\'t match';
  }

  return errors;
};
