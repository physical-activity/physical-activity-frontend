import type { Preview } from '@storybook/react';
import '../src/app/styles/fonts/fonts.css';
import '../src/app/styles/variable.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
