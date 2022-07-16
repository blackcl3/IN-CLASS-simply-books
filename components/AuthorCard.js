import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ author }) {
  return (
    <>
      <div>AuthorCard</div>
      <div>{author.first_name}</div>
      <div>{author.last_name}</div>
      <div>{author.email}</div>
      <div>{author.favorite}</div>
    </>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

AuthorCard.defaultProps = {
  author: {
    first_name: 'John',
    last_name: 'Milton',
    email: 'jam@jm.com',
    favorite: false,
  },
};
