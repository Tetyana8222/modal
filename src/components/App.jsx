import Modal from '../components/Modal';


import React, { Component } from 'react';

export class App extends Component {
  state = {
    showModal: false,
  };
  //метод інверсія, показуємо пбо не показуємо модальне вікно
  // чому не спрацьовує через деструктуризацію?
  toggleModal = ({ showModal }) => {
    console.log(showModal);
    this.setState(state => ({
      showModal: !showModal,
    }));
  };
  // toggleModal = () => {
  //   this.setState({ showModal: !this.state.showModal });
  // };
  // toggleModal = () => {
  //   this.setState(state => ({
  //     showModal: !state.showModal,
  //   }));
  // };

  render() {
    const { showModal } = this.state;
    return (
      //1.якщо showModal = true, то рендеримо модалку;
      //2. створюжмо кнопку і вішаємо на неї метод відкриття модалки toggleModal;
      //3.додаємо контент модалки як children а рендері з файла модалки
      // так ми маємо компонент, який ми можемо перевикористати задяки {this.props.children}
      <div>
        <button type="button" onClick={this.toggleModal}>
          Відкрити
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Раді вас вітати!</h1>
            <p>Все, що ви бачите в модальці - дані this.props.children</p>
            <button type="button" onClick={this.toggleModal}>
              Закрити
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
