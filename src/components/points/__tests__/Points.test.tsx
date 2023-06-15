import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Points } from '../index';

describe('Button', () => {
	test('Should render Button correctly', () => {
		render(
			<Points
				address={'0x1Ff664da51CeD0bb8356C6737815e2B970D6b9B8' as `0x${string}`}
				onClick={handleClick}
			>
				Submit
			</Points>,
		);
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('Submit');
	});

	test('Should be clickable', async () => {
		const user = userEvent.setup();
		const handleClick = jest.fn();
		render(
			<Points
				address={'0x1Ff664da51CeD0bb8356C6737815e2B970D6b9B8' as `0x${string}`}
				onClick={handleClick}
			>
				Click me
			</Points>,
		);
		const button = screen.getByRole('button');
		await user.click(button);
		expect(handleClick).toHaveBeenCalled();
	});

	test('Should not be clickable when disabled', () => {
		const handleClick = jest.fn();
		render(
			<Points
				address={'0x1Ff664da51CeD0bb8356C6737815e2B970D6b9B8' as `0x${string}`}
				onClick={handleClick}
				disabled
			>
				Click me
			</Points>,
		);
		userEvent.click(screen.getByRole('button'));
		expect(handleClick).not.toHaveBeenCalled();
	});

	test('Should pass aria-pressed to the inner button', () => {
		render(
			<Points
				address={'0x1Ff664da51CeD0bb8356C6737815e2B970D6b9B8' as `0x${string}`}
				aria-pressed="true"
			>
				Action
			</Points>,
		);
		expect(screen.getByRole('button', { pressed: true })).toBeInTheDocument();
	});
});
