type ForegroundColor =
	| 'black'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'magenta'
	| 'cyan'
	| 'white'
	| 'gray'
	| 'grey'
	| 'blackBright'
	| 'redBright'
	| 'greenBright'
	| 'yellowBright'
	| 'blueBright'
	| 'magentaBright'
	| 'cyanBright'
	| 'whiteBright';

type BackgroundColor =
	| 'bgBlack'
	| 'bgRed'
	| 'bgGreen'
	| 'bgYellow'
	| 'bgBlue'
	| 'bgMagenta'
	| 'bgCyan'
	| 'bgWhite'
	| 'bgGray'
	| 'bgGrey'
	| 'bgBlackBright'
	| 'bgRedBright'
	| 'bgGreenBright'
	| 'bgYellowBright'
	| 'bgBlueBright'
	| 'bgMagentaBright'
	| 'bgCyanBright'
	| 'bgWhiteBright';

type Color = ForegroundColor | BackgroundColor;

/**
 * IntroCliConfig - The configuration object used to customize the CLI onboarding message.
 */
export type IntroCliConfig = {
	/**
	 * @property {Object} bigTitle - Configures the large title displayed at the top, often rendered using figlet.
	 * @property {string} bigTitle.label - The text to display as the big title.
	 * @property {Color} bigTitle.color - The color of the big title text (options from chalk).
	 * @property {boolean} bigTitle.bold - Whether the big title should be bold.
	 */
	readonly bigTitle?: {
		readonly label: string;
		readonly color: Color;
		readonly bold?: boolean;
	};
	/**
	 * @property {Object} welcomeMessage - Configures the welcome message text.
	 * @property {string} welcomeMessage.label - The text to display as the welcome message.
	 * @property {Color} welcomeMessage.color - The color of the welcome message text.
	 * @property {boolean} welcomeMessage.bold - Whether the welcome message should be bold.
	 */
	readonly welcomeMessage?: {
		readonly label: string;
		readonly color: Color;
		readonly bold?: boolean;
	};
	/**
	 * @property {Object} welcomeDivider - Configures the divider text displayed between sections.
	 * @property {string} welcomeDivider.label - The divider text (e.g., emojis or symbols).
	 * @property {Color} welcomeDivider.color - The color of the divider text.
	 * @property {boolean} welcomeDivider.bold - Whether the divider text should be bold.
	 */
	readonly welcomeDivider?: {
		readonly label: string;
		readonly color: Color;
		readonly bold?: boolean;
	};
	/**
	 * @property {Object} rulesTitle - Configures the title for the rules section.
	 * @property {string} rulesTitle.label - The text to display as the rules title.
	 * @property {Color} rulesTitle.color - The color of the rules title text.
	 * @property {boolean} rulesTitle.bold - Whether the rules title should be bold.
	 */
	readonly rulesTitle?: {
		readonly label: string;
		readonly color: Color;
		readonly bold?: boolean;
	};
	/**
	 * @property {Object[]} rules - An array of objects representing the rules.
	 * Each rule can optionally have an emoji and a label for the rule text.
	 * @property {string} [rules.emoji] - An optional emoji to display before the rule.
	 * @property {Object} rules.label - Configures the text for each rule.
	 * @property {string} rules.label.label - The rule text to display.
	 * @property {Color} rules.label.color - The color of the rule text.
	 * @property {boolean} rules.label.bold - Whether the rule text should be bold.
	 */
	readonly rules?: {
		readonly emoji?: string;
		readonly label: {
			readonly label: string;
			readonly color: Color;
			readonly bold?: boolean;
		};
	}[];
};
