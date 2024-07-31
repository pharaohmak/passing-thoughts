import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { generateId, getNewExpirationTime } from '../utilities';

export function AddThoughtForm({ addThought }) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    if (text.length > 0) {
      addThought(thought);
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

AddThoughtForm.propTypes = {
  addThought: PropTypes.func.isRequired,
};