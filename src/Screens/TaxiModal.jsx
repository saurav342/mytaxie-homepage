import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const TaxiModal = (props) => {
  console.log('....props.inside....', props);
  const {isOpen, modalData} = props;
  // const[value,setValue]=useState(props)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(()=>{
    setIsModalOpen(isOpen);
  },[isOpen])


  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      {/* <TaxiModal data={data} /> */}
      <form>
        <button>{props.from}</button>
        <button>{props.to}</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default TaxiModal;
