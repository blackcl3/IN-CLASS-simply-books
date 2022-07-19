import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function SignOut() {
  return (
    <Button type="button" className="copy-btn" variant="danger" onClick={signOut}>
      Sign Out
    </Button>
  );
}

export default SignOut;
