/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

export default function User({
  name, image, email, lastSignInTime,
}) {
  return (
    <>
      <div>User</div>
      <p>{name}</p>
      <p>{image}</p>
      <img src={image} width={200} height={200} />
      <p>{email}</p>
      <p>{lastSignInTime}</p>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  lastSignInTime: PropTypes.string,
};

User.defaultProps = {
  name: 'Christian Black',
  image: 'https://lh3.googleusercontent.com/a-/AOh14GiGgEoduNAsMcdBfvGb5_PO377E_ppGePzqwwwDLA=s96-c',
  email: 'blackcl3@gmail.com',
  lastSignInTime: 'Sat, 16 Jul 2022 14:32:25 GMT',
};
