import type { IntroCliConfig } from './src/index';

const config: IntroCliConfig = {
	bigTitle: {
		label: 'Intro Cli', // The large title text to display at the top.
		color: 'blueBright', // The color of the big title text.
		bold: true, // Whether the big title text should be bold.
	},
	welcomeMessage: {
		label: 'Welcome to Intro CLI Project! Get ready to contribute 🚀', // The welcome message text.
		color: 'green', // The color of the welcome message text.
		bold: true, // Whether the welcome message text should be bold.
	},
	welcomeDivider: {
		label: '🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨', // Divider between sections (can be emojis or symbols).
		color: 'yellowBright', // The color of the divider.
		bold: false, // Whether the divider should be bold.
	},
	rulesTitle: {
		label: 'Please follow these guidelines:', // The title for the rules section.
		color: 'cyan', // The color of the rules title text.
		bold: true, // Whether the rules title text should be bold.
	},
	rules: [
		{
			emoji: '🛂', // Optional emoji to display before the rule.
			label: {
				label: 'Follow the coding standards at all times.', // The rule text.
				color: 'magentaBright', // The color of the rule text.
				bold: true, // Whether the rule text should be bold.
			},
		},
		{
			emoji: '🚀',
			label: {
				label: 'Make sure all tests pass before creating a pull request.',
				color: 'redBright',
				bold: true,
			},
		},
		{
			emoji: '✅',
			label: {
				label: 'Commit messages should be clear and follow our guidelines.',
				color: 'greenBright',
				bold: true,
			},
		},
		{
			emoji: '📦',
			label: {
				label: 'Use semantic versioning when releasing updates.',
				color: 'yellowBright',
				bold: true,
			},
		},
	],
};

export default config;
