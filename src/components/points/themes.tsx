import { css } from '@emotion/react';
import { rgba } from '@src/utils/rgba';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
	WHITE,
} from '@src/constants/colors';
import type { Color1, Variant1 } from './Points';

function getColorScheme(color: Color1) {
	switch (color) {
		case 'error':
			return ERROR;
		case 'success':
			return SUCCESS;
		case 'warn':
			return WARN;
		case 'secondary':
			return SECONDARY;
		case 'primary':
		default:
			return PRIMARY;
	}
}

export function getTheme(color: Color1, variant: Variant1) {
	const colorScheme = getColorScheme(color);
	switch (variant) {
		case 'outline':
			return css`
				color: ${colorScheme};
				background-color: transparent;
				border: 1px solid ${colorScheme};
				&:hover {
					background-color: ${rgba(colorScheme, 0.05)};
				}
			`;
		case 'text':
			return css`
				color: ${colorScheme};
				background-color: transparent;
				border: 1px solid transparent;
				&:hover {
					background-color: ${rgba(colorScheme, 0.05)};
				}
			`;
		case 'solid':
		default:
			return css`
				color: ${WHITE};
				background-color: ${colorScheme};
				border: 1px solid ${colorScheme};
			`;
	}
}
