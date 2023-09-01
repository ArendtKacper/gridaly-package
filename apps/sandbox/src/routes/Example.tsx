import styled from 'styled-components';

// COMPONENTS
import { add, divide, subtract } from '@gridal/package';
import { Button } from '@gridal/ui';

const StyledDiv = styled.div`
	background-color: ${({ theme }) => theme.success};
`;

export const Example = () => (
	<StyledDiv>
		<p>gridaly-package function</p>
		<p>add: {add(4, 6)}</p>
		<p>subtract: {subtract(20, 6)}</p>
		<p>divide: {divide(100, 5)}</p>
		{/* eslint-disable-next-line no-console */}
		<Button text="123123" onClick={() => console.log('Click')} />
	</StyledDiv>
);
