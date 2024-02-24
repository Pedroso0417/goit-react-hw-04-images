import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={css.galleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.altDescription || ''} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    altDescription: PropTypes.string, // Optional alt description
    largeImageURL: PropTypes.string.isRequired,
    // Add more properties as needed
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
