import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import css from './Modal.module.css';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, imageUrl, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      style={{overflow:"hidden"}} // this style i used to disable the scroll
    >
      <img src={imageUrl} style={{width:"100%",height:"100%",objectFit:"cover"}}alt="" /> {/* object fit property is used to adjust the image in given height */}
      <button className={css.closeButton} onClick={onClose}>
        &times;
      </button>
    </Modal>
  );
}; 

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export { CustomModal as Modal };
