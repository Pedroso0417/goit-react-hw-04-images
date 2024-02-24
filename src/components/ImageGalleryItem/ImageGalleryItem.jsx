import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={css.galleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="" />{/* object fit property is used to adjust the image in given height */}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired, // Assuming 'image' is an object
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
