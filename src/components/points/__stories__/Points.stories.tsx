import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Points } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Points',
	component: Points,
} as ComponentMeta<typeof Points>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Points> = (args) => {
	return (
		<>
			<Points {...args} />
			&nbsp;&nbsp;
			<Points {...args} disabled />
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	onClick: action('clicked'),
	children: '0',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	onClick: action('clicked'),
	children: '1',
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	onClick: action('clicked'),
	children: '10',
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	onClick: action('clicked'),
	children: '100',
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	onClick: action('clicked'),
	children: 'Warn Button',
};
