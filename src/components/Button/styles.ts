import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button``;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
`;
export const loadingAnimation = keyframes`
 	100% {
		transform: rotate(1turn);
	}
`;

export const LoadingDiv = styled.div`
	position: absolute;
	z-index: -2;
	left: -50%;
	height: ${({ parent = {} }) => Math.sqrt(Math.pow(parent.height, 2) + Math.pow(parent.width, 2))}px;
	width: 200%;
	height: ${({ parent = {} }) => Math.sqrt(Math.pow(parent.height, 2) + Math.pow(parent.width, 2))}px;

	background-color: transparent;
	background-repeat: no-repeat;
	background-size: 50% 50%, 50% 50%;
	background-position: 0 0, 100% 0, 100% 100%, 0 100%;
	animation-name: ${loadingAnimation};
	animation-duration: 2500ms;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;
