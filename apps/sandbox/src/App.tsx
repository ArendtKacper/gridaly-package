import { add, divide, subtract } from 'gridaly-package';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme as themeDefault } from 'styled';

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
	</ThemeProvider>
);

export default App;
