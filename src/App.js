import './App.css';
import { useState } from 'react';
import { Modal } from './Components/Modal'

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="btnArea">
      <h1>Hi, I am a Modal.</h1>
      <button onClick={() => { setOpenModal(true) }} className="openButton">Click here to open me!</button>

      {openModal && <Modal openModal={setOpenModal} />}
   
    </div>
  )
}

export default App;
