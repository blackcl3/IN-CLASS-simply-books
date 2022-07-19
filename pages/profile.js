import React from 'react';
import SignOut from '../components/SignOut';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User
        email={user.email}
        name={user.displayName}
        image={user.photoURL}
        lastSignInTime={user.metadata.lastSignInTime}
      />
      <SignOut />
    </>
  );
}
