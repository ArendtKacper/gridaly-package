import styled, { ThemeProvider } from 'styled-components';

// SHARABLE PACKAGES
import { GlobalStyles, theme as themeDefault } from 'styled';

// PACKAGES
import { Button } from '@gridal/ui';
import { add, divide, subtract } from '@gridal/package';

export const StyledDiv = styled.div`
	background-color: ${({ theme }) => theme.success};
`;

const App = () => (
	<ThemeProvider theme={themeDefault}>
		<GlobalStyles />
		<StyledDiv>
			<p>gridaly-package function</p>
			<p>add: {add(4, 6)}</p>
			<p>subtract: {subtract(20, 6)}</p>
			<p>divide: {divide(100, 5)}</p>
		</StyledDiv>
		{/* eslint-disable-next-line no-console */}
		<Button text="123123" onClick={() => console.log('Click')} />
	</ThemeProvider>
);

export default App;
