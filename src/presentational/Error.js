import React from 'react';
import ErrorStyles from '../styles/ErrorStyles.module.css';

const Error = () => (
  <div>
    <h1 className={ErrorStyles.error}>Oops! Page not found!</h1>
  </div>
);

export default Error;
