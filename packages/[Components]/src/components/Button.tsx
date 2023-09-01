// REDUX

// HOOKS

// MODELS

// COMPONENTS

// STYLES

// CONFIG
import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 12.5rem;
	padding: 2rem;
	background-color: ${({ theme }) => theme.danger};
	border-radius: ${({ theme }) => theme.radius[3]};
`;

export const Button = ({ text, onClick }: { text: string; onClick: () => void }) => (
	<StyledButton onClick={onClick}>{text}</StyledButton>
);
