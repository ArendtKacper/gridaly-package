import { BreakpointsKeys } from './themeDefault';
import { css } from 'styled-components';

const thumbStyles = css`
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.grey400};
	border: 3px solid transparent;
	background-clip: content-box;

	:hover {
		background-color: ${({ theme }) => theme.darken({ amount: 0.05, color: theme.grey500 })};
	}
`;

const trackStyles = css`
	background-color: transparent;
`;

export const ScrollbarStyles = css`
	* {
		scrollbar-width: thin !important;
		// THUMB, TRACK COLORS
		scrollbar-color: ${({ theme }) => theme.grey400} transparent !important;
	}

	::-webkit-scrollbar {
		width: ${({ theme }) => theme.scrollbarWidth};
	}

	::-moz-scrollbar {
		width: ${({ theme }) => theme.scrollbarWidth};
	}

	::-ms-scrollbar {
		width: ${({ theme }) => theme.scrollbarWidth};
	}

	// THUMB
	::-webkit-scrollbar-thumb {
		${thumbStyles};
	}

	::-moz-scrollbar-thumb {
		${thumbStyles};
	}
	::-ms-scrollbar-thumb {
		${thumbStyles};
	}

	// TRACK
	::-webkit-scrollbar-track {
		${trackStyles}
	}

	::-moz-scrollbar-track {
		${trackStyles}
	}

	::-ms-scrollbar-track {
		${trackStyles}
	}
`;

export const ScrollbarStylesWithoutBorder = css`
	* {
		scrollbar-width: thin !important;
		// THUMB, TRACK COLORS
		scrollbar-color: ${({ theme }) => theme.grey400} transparent !important;
	}

	::-webkit-scrollbar {
		width: ${({ theme }) => `calc(${theme.scrollbarWidth} - 0.4rem)`};
	}

	::-moz-scrollbar {
		width: ${({ theme }) => `calc(${theme.scrollbarWidth} - 0.4rem)`};
	}

	::-ms-scrollbar {
		width: ${({ theme }) => `calc(${theme.scrollbarWidth} - 0.4rem)`};
	}

	// THUMB
	::-webkit-scrollbar-thumb {
		border: 0;
	}

	::-moz-scrollbar-thumb {
		border: 0;
	}

	::-ms-scrollbar-thumb {
		border: 0;
	}
`;

const trackXStyles = css`
	border: 1px solid transparent;
	background-color: transparent;
`;

export const scrollbarXStyles = css<{
	showOnHover: boolean;
	conditionalTopScrollbar: boolean;
	responsiveTopScrollbar: BreakpointsKeys;
}>`
	::-webkit-scrollbar {
		height: ${({ theme }) => theme.scrollbarXHeight};
	}

	::-moz-scrollbar {
		height: ${({ theme }) => theme.scrollbarXHeight};
	}

	::-ms-scrollbar {
		height: ${({ theme }) => theme.scrollbarXHeight};
	}

	::-webkit-scrollbar-track {
		${trackXStyles}
	}

	::-moz-scrollbar-track {
		${trackXStyles}
	}

	::-ms-scrollbar-track {
		${trackXStyles}
	}

	${({ showOnHover }) =>
		showOnHover &&
		css`
			::-webkit-scrollbar-thumb {
				background-color: transparent;
			}

			::-moz-scrollbar-thumb {
				background-color: transparent;
			}
			::-ms-scrollbar-thumb {
				background-color: transparent;
			}

			:hover {
				::-webkit-scrollbar-thumb {
					${thumbStyles};
				}

				::-moz-scrollbar-thumb {
					${thumbStyles};
				}
				::-ms-scrollbar-thumb {
					${thumbStyles};
				}
			}
		`}

	${({ conditionalTopScrollbar }) =>
		conditionalTopScrollbar &&
		css`
			transform: rotateX(180deg);
			> * {
				transform: rotateX(180deg);
			}
		`}

	${({ theme, responsiveTopScrollbar }) =>
		theme.breakpoints[responsiveTopScrollbar] &&
		css`
			@media (min-width: ${theme.breakpoints[responsiveTopScrollbar]}) {
				transform: rotateX(180deg);
				> * {
					transform: rotateX(180deg);
				}
			}
		`}
`;
