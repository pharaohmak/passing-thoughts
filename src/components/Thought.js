import PropTypes from 'prop-types';
import { useEffect } from 'react'

export function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    return () => {
      clearTimeout(timeout);
    };
  }, [thought, removeThought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}

Thought.propTypes = {
  thought: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    expiresAt: PropTypes.number.isRequired,
  }).isRequired,
  removeThought: PropTypes.func.isRequired,
};