import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from 'components/Login';
import { onSetCurrentUser } from 'actions/currentUser';

export const isAuth = (OldComponent) => {
  const newComponent = (props) => {
    if (props.currentUser.username) return <OldComponent {...props} />;
    return <Login {...props} />;
  };

  newComponent.propTypes = {
    currentUser: PropTypes.object,
  };

  newComponent.defaultProps = {
    currentUser: {},
  };

  const mapDispatchToProps = (dispatch) => ({
    setUser: (user = {}) => dispatch(onSetCurrentUser(user)),
  });

  const mapStateToProps = ({ currentUser = {} }) => ({ currentUser });
  return connect(mapStateToProps, mapDispatchToProps)(newComponent);
};

export default isAuth;
