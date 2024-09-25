/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import chalk from 'chalk';
import type { IntroCliConfig } from '../types/config-types';

const figlet = require('figlet');

/**
 * renderOnboardingMessage - Renders the onboarding message based on the user config.
 *
 * @param {IntroCliConfig} config - The user's configuration for the onboarding message.
 */
export const renderOnboardingMessage = (config: Partial<IntroCliConfig>): void => {
	if (config.bigTitle && config.bigTitle.label) {
		figlet(config.bigTitle.label, (err: any, figletText: any) => {
			if (err) {
				console.error(chalk.redBright('Error rendering big title.'));

				return;
			}

			const styledTitle = config.bigTitle?.bold ? chalk[config.bigTitle.color].bold(figletText) : chalk[config.bigTitle?.color ?? 'blue'](figletText);

			console.log(styledTitle);

			renderWelcomeMessage(config);
			renderDivider(config);
			renderRules(config);
		});
	} else {
		renderWelcomeMessage(config);
		renderDivider(config);
		renderRules(config);
	}
};

/**
 * Renders the welcome message.
 */
const renderWelcomeMessage = (config: Partial<IntroCliConfig>): void => {
	if (config.welcomeMessage && config.welcomeMessage.label) {
		const styledWelcomeMessage = config.welcomeMessage.bold
			? chalk[config.welcomeMessage.color].bold(config.welcomeMessage.label)
			: chalk[config.welcomeMessage.color](config.welcomeMessage.label);

		console.log(`\n${styledWelcomeMessage}`);
	}
};

/**
 * Renders the welcome divider.
 */
const renderDivider = (config: Partial<IntroCliConfig>): void => {
	if (config.welcomeDivider && config.welcomeDivider.label) {
		const styledDivider = config.welcomeDivider.bold
			? chalk[config.welcomeDivider.color].bold(config.welcomeDivider.label)
			: chalk[config.welcomeDivider.color](config.welcomeDivider.label);

		console.log(`\n${styledDivider}\n`);
	}
};

/**
 * Renders the rules section.
 */
const renderRules = (config: Partial<IntroCliConfig>): void => {
	if (config.rulesTitle && config.rulesTitle.label) {
		const styledRulesTitle = config.rulesTitle.bold
			? chalk[config.rulesTitle.color].bold(config.rulesTitle.label)
			: chalk[config.rulesTitle.color](config.rulesTitle.label);

		console.log(styledRulesTitle);
	}

	if (config.rules && Array.isArray(config.rules)) {
		config.rules.forEach((rule) => {
			if (rule.label && rule.label.label) {
				const emoji = rule.emoji ? `${rule.emoji} ` : '';
				const styledRule = rule.label.bold ? chalk[rule.label.color].bold(rule.label.label) : chalk[rule.label.color](rule.label.label);

				console.log(`- ${emoji}${styledRule}`);
			}
		});

		console.log('\n');
	}
};
