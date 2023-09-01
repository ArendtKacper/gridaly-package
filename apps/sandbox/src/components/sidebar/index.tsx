// REDUX

// HOOKS

// MODELS

// COMPONENTS

// STYLES

// CONFIG
import { Link } from 'wouter';

import styled, { css } from 'styled-components';
import { useState } from 'react';
import { routes } from 'src/routes';

const StyledAside = styled.aside<{ active: number }>`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	background-color: ${({ theme }) => theme.grey1000};
	width: ${({ active }) => (active ? '220px' : '50px')};
	transition: width 0.3s ease;
`;
const StyledButton = styled.button<{ active: number }>`
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.grey200};
	font-size: 1.5rem;

	${({ active }) =>
		active &&
		css`
			border-color: ${({ theme }) => theme.success};
		`};
`;

const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	padding: 0.2rem;

	a {
		padding: 0.3rem;
		color: ${({ theme }) => theme.white};
		border-bottom: 1px solid transparent;
		transition: all 0.3s ease;
	}

	a:hover {
		border-bottom-color: ${({ theme }) => theme.white};
	}
`;

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledAside active={isOpen ? 1 : 0}>
			<StyledButton onClick={() => setIsOpen(!isOpen)} active={isOpen ? 1 : 0}>
				{isOpen ? <>⬅️</> : <>➡️</>}
			</StyledButton>
			️
			<StyledNav>
				{routes.map(({ path, name }) => (
					<Link key={path} href={path}>
						{name}
					</Link>
				))}
			</StyledNav>
		</StyledAside>
	);
};
