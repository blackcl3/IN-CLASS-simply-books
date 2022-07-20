import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({ author, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${author.first_name}?`)) {
      deleteAuthorBooks(author.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card>
        <div>{author.first_name}</div>
        <div>{author.last_name}</div>
        <div>{author.email}</div>
        <div>{author.favorite}</div>
        <Link href={`/author/edit/${author.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor}>
          DELETE
        </Button>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
