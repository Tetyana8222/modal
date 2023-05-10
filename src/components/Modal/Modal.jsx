import React, { Component } from 'react';
import { ModalContent, ModalBackdrop } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillMount');
  }
  render() {
    return (
      <ModalBackdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>
    );
  }
}
