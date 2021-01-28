import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import imagesAPI from '../../services/images-api';
import ImageError from '../ImageError/ImageError';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

export default function ImageInfo({
  imageName,
  images,
  setImages,
  page,
  setPage,
}) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    setStatus('pending');

    imagesAPI
      .fetchImages(imageName, page)
      .then(images => {
        if (images.hits.length !== 0) {
          setImages(prevState => [...prevState, ...images.hits]);
          setStatus('resolved');
        }
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [imageName, setImages, page]);

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  if (status === 'idle') {
    return <div className="IdleMessage">Please enter data to search field</div>;
  }
  if (status === 'rejected') {
    return <ImageError message={error.message} />;
  }
  if (images.total === 0) {
    return (
      <div>Image was not found. Please, change your request and try again.</div>
    );
  }

  return (
    <>
      <ImageGallery images={images} />
      {status === 'pending' ? <Loader /> : <Button onClick={onClickLoadMore} />}
    </>
  );
}

ImageInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};
