import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  handleClose = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      console.log('Нажали ESC');
      console.log(this.props);

      this.props.onClose();
    }
  };
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    console.log('Modal componentWillMount');
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      console.log('Нажали ESC');
      console.log(this.props);

      this.props.onClose({ showModal: true });
    }
  };
  handleBackdropClick = event => {
    // console.log('click backdrop');
    // console.log(event.currentTarget);
    // console.log(event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose({ showModal: true });
    }
  };
  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
