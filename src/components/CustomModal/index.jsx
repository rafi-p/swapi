import React from 'react';
import Modal from 'react-modal';

import { Container } from './style';

const CustomModal = props => {
  const { children, isOpen, afterOpenModal, closeModal, customStyles, className } = props;
  return (
    <Modal
      closeTimeoutMS={ 300 }
      isOpen={ isOpen }
      onAfterOpen={ afterOpenModal }
      onRequestClose={ closeModal }
      style={ customStyles }
      ariaHideApp={ false }
      // contentLabel="Example Modal"
      className={ 'customModal ' + className ? className : '' }
    >
      { children }
    </Modal>
  );
};

export default CustomModal;
