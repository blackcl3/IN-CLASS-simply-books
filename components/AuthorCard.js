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
      <Card className="authorCard">
        <h3>
          {author.first_name} {author.last_name}
        </h3>
        <div>{author.email}</div>
        <div>{author.favorite}</div>
        <div className="authorButtonGroup">
          <Link href={`/author/${author.firebaseKey}`} passHref>
            <Button variant="primary" className="viewAuthorDetailsButton">
              VIEW DETAILS
            </Button>
          </Link>
          <Link href={`/author/edit/${author.firebaseKey}`} passHref>
            <Button variant="info" className="authorEditButton">
              EDIT
            </Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="authorDeleteButton">
            DELETE
          </Button>
        </div>
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
