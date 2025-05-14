import './Modal.css';

const Modal = ({ children, onClose }) => {
	return (
		<div className='overlay'>
			<div className='modal'>
				<button onClick={onClose} className='close-button'>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
