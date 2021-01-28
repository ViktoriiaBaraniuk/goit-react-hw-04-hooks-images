import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <div className="BtnContainer">
      <button onClick={onClick} className="Button" type="button">
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
