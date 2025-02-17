import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = (props) => {
  const { message } = props;

  return (
    <div className="error">
      <p className="error__text">
        {message}
      </p>
      <a href="/" className="error__link">
        Visit home page
      </a>
    </div>
  );
};

Error.prototypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong',
};
