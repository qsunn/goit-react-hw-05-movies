import { useState } from 'react';
import { PropTypes } from 'prop-types';

import { Button } from 'components/Button/Button';

export const SearchForm = ({ submitHandler }) => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    submitHandler(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button title="Search" type="submit" />
    </form>
  );
};

SearchForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
