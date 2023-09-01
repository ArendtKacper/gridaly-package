import 'styled-components';
import { ThemeType } from 'styled/src/web/themeDefault';

declare module 'styled-components' {
	interface DefaultTheme extends ThemeType {}
}
