import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ images }) {
  return (
    <div className="ImageGalleryContainer">
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            srcModal={image.largeImageURL}
            alt={image.tags}
          />
        ))}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
