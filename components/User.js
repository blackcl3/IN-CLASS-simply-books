import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function User() {
  const { user } = useAuth();
  return (
    <>
      <div>User</div>
      <p>{user.displayName}</p>
      <p>{user.photoURL}</p>
      <Image
        src={user.photoURL}
        alt="Profile Picture"
        width={200}
        height={200}
      />
      <p>{user.email}</p>
      <p>{user.metadata.lastSignInTime}</p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape,
  }),
};

User.defaultProps = {
  user: {
    displayName: 'Christian Black',
    photoURL: 'https://www.google.com/',
    email: 'blackcl3@gmail.com',
    metadata: { lastSignInTime: 'Sat, 16 Jul 2022 14:32:25 GMT' },
  },
};
