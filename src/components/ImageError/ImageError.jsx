import errorImage from '../../images/error.jpg';

export default function ImageError({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="800" alt="bad cat" className="ImageError" />
      <p>{message}</p>
    </div>
  );
}
