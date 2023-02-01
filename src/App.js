import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
	<>
	<Button variant="primary" onClick={handleShow}>
		My Button for popup
	</Button>

	<Modal
		show={show}
		onHide={handleClose}
		backdrop="static"
		keyboard={false}
	>
		<Modal.Header closeButton>
		<Modal.Title>Popup Content</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		Displays the content of the popup!!
		</Modal.Body>
		<Modal.Footer>
		<Button variant="primary" onClick={handleClose}>
			Close
		</Button>
			
		</Modal.Footer>
	</Modal>
	</>
);
}

export default Example;
