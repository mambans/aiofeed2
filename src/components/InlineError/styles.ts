import styled from "styled-components";

export const Wrapper = styled.span`
	color: ${({ theme }) => theme.colors.red};
	background: ${({ theme }) => theme.rgba(theme.colors.red, 0.25)};
	padding: 0.35rem 0.75rem;
	border-radius: ${({ theme }) => theme.borderRadius};
	width: max-content;
	margin-block: 0.5rem;
`;
