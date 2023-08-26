import Timepicker from '.';

const meta = {
	title: 'Features/Timepicker',
	component: Timepicker,
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
};

export default meta;

export const Default = {
	args: {
		title: 'Время старта',
		onClose: () => {
			console.log('value');
		},
		handleTimePick: () => {
			console.log('picked!');
		},
	},
};
