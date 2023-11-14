import {useState} from 'react';
import Modal from './components/Modal/Modal.tsx';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(true);

  const cancel = () => {
    setShowModal(false);
  }

  return (
    <>
      <Modal
        show={showModal}
        onClose={cancel}
        title='Modal title'
      >
        <div
          className='fs-5'
          style={{position: 'absolute', top: '5px', right: '10px'}}
          onClick={cancel}
        >
          X
        </div>
        <p>Modal content</p>
      </Modal>
    </>
  );
}

export default App;
