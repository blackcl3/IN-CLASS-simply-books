import React from 'react';
import { useRouter } from 'next/router';

export default function IndividualAuthorPage() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { firebaseKey } = router.query;
  return (
    <>
      <div>Individual Author Page</div>
    </>
  );
}
