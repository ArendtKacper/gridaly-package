import { Route, Switch } from 'wouter';
import styled, { ThemeProvider } from 'styled-components';

// SHARABLE PACKAGES
import { GlobalStyles, theme as themeDefault } from 'styled';

// PACKAGES
import { routes } from 'src/routes';

// COMPONENTS
import { Sidebar } from 'src/components/sidebar';

export const StyledContainer = styled.div`
	display: flex;
	min-height: 100vh;
`;

export const StyledMain = styled.main`
	flex: 1;
`;

const App = () => (
	<ThemeProvider theme={themeDefault}>
		<GlobalStyles />
		<StyledContainer>
			<Sidebar />
			<StyledMain>
				<Switch>
					{routes.map(({ path, component }) => (
						<Route key={path} path={path} component={component} />
					))}
				</Switch>
			</StyledMain>
		</StyledContainer>
	</ThemeProvider>
);

export default App;
