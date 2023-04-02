import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Container: any = styled.dialog`
	width: 400px;
	border-radius: 8px;
	border: none;
	padding: 2rem;
	box-shadow: 0px 0px 15px 5px #212531;
	background-color: ${({ theme }) => theme.colors.secondary};
	position: relative;
	pointer-events: none;
	opacity: 0;
	transition: opacity 250ms;

	&::backdrop {
		/* opacity: 0; */
		transition: opacity 250ms;
		background: rgba(0, 0, 0, 0.3);
	}

	/* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

	/* &[open] {
		opacity: 1;
	} */

	&[open] {
		opacity: 1;
		animation: ${fadeIn} 250ms normal;
		-webkit-animation: ${fadeIn} 250ms normal;
		-moz-animation: ${fadeIn} 250ms normal;

		/* &::backdrop {
			opacity: 1;
			animation: ${fadeIn} 250ms normal;
			-webkit-animation: ${fadeIn} 250ms normal;
			-moz-animation: ${fadeIn} 250ms normal;
		} */
	}
`;

const Title = styled.h3`
	text-align: center;
`;

const CloseButton = styled.button`
	position: absolute;
	right: 1rem;
	top: 1rem;
	background: transparent;
	border: none;
`;

export { Container, Title, CloseButton };
