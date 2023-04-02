import styled from "styled-components";

export const StyledInput = styled.input`
	padding: 0.5rem 1rem;
	border: none;
	border-color: transparent;
	outline-style: none;

	&&&&& {
		&:focus,
		&:focus-within,
		&:focus-visible {
			border: none;
			border-color: transparent;
			outline-style: none;
		}
	}
`;
export const StyledLabel = styled.label`
	font-size: 0.8rem;
	padding: 0.125rem 0.25rem;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
`;
export const StyledInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: ${({ theme }) => theme.borderRadius};
	overflow: hidden;
	position: relative;
`;
export const StyledInputPrefixError = styled.div`
	background-color: ${({ theme }) => theme.colors.red};
	width: ${({ error }) => (error ? "10" : "0")}px;
	transition: width 250ms;
	overflow: hidden;
	cursor: pointer;
	position: absolute;
	left: 0;
	inset-block: 0;

	display: flex;
	align-items: center;

	span {
		padding: 0.5rem 1rem;
		opacity: 0;
		transition: opacity 250ms;
		font-size: 0.8em;
	}

	&:hover {
		width: 50%;

		span {
			opacity: 1;
		}
	}
`;
