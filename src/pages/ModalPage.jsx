import { useState } from 'react';
import Modal from './Modal';
import './Modal.css';

const ModalPage = () => {
	const [isOpen, setIsOpen] = useState(null);

	const toggleModal = (modalNumber) => {
		setIsOpen(isOpen === modalNumber ? null : modalNumber);
	};

	return (
		<div className='modal-page'>
			<button className='open-button' onClick={() => toggleModal(1)}>
				Open Modal 1
			</button>
			<button className='open-button' onClick={() => toggleModal(2)}>
				Open Modal 2
			</button>
			<button className='open-button' onClick={() => toggleModal(3)}>
				Open Modal 3
			</button>

			{isOpen === 1 && (
				<Modal onClose={() => toggleModal(1)}>
					<h1>Header Modal 1</h1>

					<p>Это модальное окно 1</p>
				</Modal>
			)}

			{isOpen === 2 && (
				<Modal onClose={() => toggleModal(2)}>
					<h1>Header Modal 2</h1>

					<p>Это модальное окно 2</p>
				</Modal>
			)}

			{isOpen === 3 && (
				<Modal onClose={() => toggleModal(3)}>
					<h1>Header Modal 3</h1>

					<p>Это модальное окно 3</p>
				</Modal>
			)}
		</div>
	);
};

export default ModalPage;
