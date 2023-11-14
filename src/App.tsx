import {useState} from 'react';
import Modal from './components/Modal/Modal.tsx';
import './App.css';
import Alert from './components/Alert/Alert.tsx';

function App() {
  const [showModal, setShowModal] = useState(true);

  const cancel = () => {
    setShowModal(false);
  }

  const closeAlert = () => {
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

      <Alert
        type="danger"
        onDismiss={closeAlert}
      >
        This is a warning type alert
      </Alert>
      <Alert type="success">This is a success type alert</Alert>
    </>
  );
}

export default App;
