import type { Meta, StoryObj } from '@storybook/react';
import CustomCalendar from '.';

const meta = {
	title: 'Features/Calendar',
	component: CustomCalendar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'modalShadow',
			values: [
				{ name: 'modalShadow', value: '#00000080' },
				{ name: 'facebook', value: '#3b5998' },
			],
		},
	},
} satisfies Meta<typeof CustomCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
