import { forwardRef } from 'react';
import { useGetPoints } from '@src/hooks/getPoints';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Points.styled';

export type Color1 = 'primary' | 'secondary' | 'success' | 'error' | 'warn';

export type Variant1 = 'solid' | 'outline' | 'text';

export interface PointsProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * The color of the Button.
	 *
	 * @default 'primary'
	 */
	color?: Color1;
	/**
	 * The visual style of the Button.
	 *
	 * @default 'solid'
	 */
	variant?: Variant1;
	/**
	 * The address of the user.
	 *
	 * */
	address: `0x${string}`;
}

export const Points = forwardRef<HTMLButtonElement, PointsProps>(
	(
		{
			id,
			className,
			onClick,
			color = 'primary',
			variant = 'solid',
			children,
			address,
			...rest
		},
		ref,
	) => {
		const { data, error, loaded } = useGetPoints(address);
		if (error)
			return (
				<Sc.Points
					ref={ref}
					id={id}
					variant={variant}
					$color={color}
					className={classNames('button-root', className)}
					onClick={onClick}
					{...rest}
				>
					2
				</Sc.Points>
			);
		if (loaded) {
			return (
				<Sc.Points
					ref={ref}
					id={id}
					variant={variant}
					$color={color}
					className={classNames('button-root', className)}
					onClick={onClick}
					{...rest}
				>
					{data} OSP
				</Sc.Points>
			);
		} else {
			return (
				<Sc.Points
					ref={ref}
					id={id}
					variant={variant}
					$color={color}
					className={classNames('button-root', className)}
					onClick={onClick}
					{...rest}
				>
					-
				</Sc.Points>
			);
		}
	},
);

Points.displayName = 'Points';
