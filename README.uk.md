Для того, шоб модалка була поверх своїх сусідів модна використати z-index, але
це погана практика.

1. ідемо в папку public файл index.html і додаємо в розмітку div з
id="modal-root"
<body>
   <noscript>You need to enable JavaScript to run this app.</noscript>
   <div id="root"></div>
   <div id="modal-root"></div>
 </body>

2.в папці Modal.jsx створюємо змінну modalRoot і querySelector до нього через
айдішнік.

3. З React-dom беремо метод:import { createPortal } from 'react-dom';

4. в render повертаємо не розмітку, а результат визову цього методу, в який
   вкладаємо розмітку - першим аргументом, а другим - посилання на modalRoot:
   render() { return createPortal( <ModalBackdrop>
   <ModalContent>{this.props.children}</ModalContent> </ModalBackdrop>,
   modalRoot ); } тепер проблеми перекривання іншими сусідами нема, бо модалка
   рендериться не в root, a modal-root;

5. Закрити модалку кнопкою іскейп, робиться це спеціальним пидходом. Ідемо в
   componentDidMount і на window додаємо слухача і додаємо метод закриття
   модального вікна toggleModal. Додаємо посилання на нього в модалку як
   onClose="toggleModal"(App.jsx).

6. Виносимо окремим методом handleKeyDown і вказуємо його також в
   componentWillUnmount(), але тут ми знімаємо слухача -
   window.removeEventListener('keydown', this.handleClose);
7. Щоб модалка закривалася також при кліци на бекдроп(сірий фон), створюємо
   окремий метод handleBackdropClick і визиваємо його на модальці при рендері
   <ModalBackdrop onClick={this.handleBackdropClick}>
8. handleBackdropClick = event => { console.log('click backdrop');
   console.log(event.currentTarget); console.log(event.target); if
   (event.currentTarget === event.target) { this.props.onClose({ showModal: true
   }); } }======>>>>>> тут ми перевіряємо чи співпадає каррент таргет з
   таргетом. Щоб модалка закривалася лише по клику на сірий фон, а не на модалку
   через спливання подій.
