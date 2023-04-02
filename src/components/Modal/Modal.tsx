import { useEffect, useRef } from "react";
import styled from "styled-components";
import { CloseButton, Container, Title } from "./style";
import { IoMdClose } from "react-icons/io";

const Buttons = styled.div`
	display: flex;
	gap: 20px;
`;

const Modal = ({ title, isOpen, onProceed, onClose, children }: Props) => {
	const ref: any = useRef(null);

	useEffect(() => {
		if (isOpen) {
			ref.current?.showModal();
			document.body.classList.add("modal-open"); // prevent bg scroll
		} else {
			ref.current?.close();
			document.body.classList.remove("modal-open");
		}
	}, [isOpen]);

	const proceedAndClose = () => {
		onProceed();
		onClose();
	};

	const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

	return (
		<Container ref={ref} onCancel={onClose} onClick={onClose}>
			<div onClick={preventAutoClose} onKeyDown={preventAutoClose} role="presentation">
				{title && <Title>{title}</Title>}

				{children}

				<Buttons>
					<button onClick={proceedAndClose}>Proceed</button>
				</Buttons>
			</div>
			<CloseButton onClick={onClose}>
				<IoMdClose size={25} />
			</CloseButton>
		</Container>
	);
};

export default Modal;
