import styled from '@emotion/styled';
import type { Color1, Variant1 } from './Points';
import { getTheme } from './themes';

export const Points = styled.button<{ $color: Color1; variant: Variant1 }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: auto;
	outline: 0;
	border: 0;
	padding: 0.5rem 1rem;
	font-size: 0.875rem;
	border-radius: 0.5rem;
	${(props) => getTheme(props.$color, props.variant)}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}
`;
