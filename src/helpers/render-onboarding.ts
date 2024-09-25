/* eslint-disable @typescript-eslint/no-var-requires */
import chalk from 'chalk';
import type { IntroCliConfig } from '../types/config-types';

const figlet = require('figlet');

const FALLBACK_TITLE_COLOR = 'blue';
const FALLBACK_DIVIDER_COLOR = 'yellowBright';
const FALLBACK_RULES_TITLE_COLOR = 'cyan';
const FALLBACK_RULE_COLOR = 'magentaBright';

/**
 * renderOnboardingMessage - Renders the onboarding message based on the user config.
 *
 * @param {IntroCliConfig} config - The user's configuration for the onboarding message.
 */
export const renderOnboardingMessage = (config: Partial<IntroCliConfig>): void => {
	if (config.bigTitle && config.bigTitle.label) {
		figlet(config.bigTitle.label, (_: unknown, figletText: string) => {
			const styledTitle = config.bigTitle?.bold
				? chalk[config.bigTitle?.color ?? FALLBACK_TITLE_COLOR].bold(figletText)
				: chalk[config.bigTitle?.color ?? FALLBACK_TITLE_COLOR](figletText);

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
			? chalk[config.welcomeMessage?.color ?? FALLBACK_TITLE_COLOR].bold(config.welcomeMessage.label)
			: chalk[config.welcomeMessage?.color ?? FALLBACK_TITLE_COLOR](config.welcomeMessage.label);

		console.log(`\n${styledWelcomeMessage}`);
	}
};

/**
 * Renders the welcome divider.
 */
const renderDivider = (config: Partial<IntroCliConfig>): void => {
	if (config.welcomeDivider && config.welcomeDivider.label) {
		const styledDivider = config.welcomeDivider.bold
			? chalk[config.welcomeDivider?.color ?? FALLBACK_DIVIDER_COLOR].bold(config.welcomeDivider.label)
			: chalk[config.welcomeDivider?.color ?? FALLBACK_DIVIDER_COLOR](config.welcomeDivider.label);

		console.log(`\n${styledDivider}\n`);
	}
};

/**
 * Renders the rules section.
 */
const renderRules = (config: Partial<IntroCliConfig>): void => {
	if (config.rulesTitle && config.rulesTitle.label) {
		const styledRulesTitle = config.rulesTitle.bold
			? chalk[config.rulesTitle?.color ?? FALLBACK_RULES_TITLE_COLOR].bold(config.rulesTitle.label)
			: chalk[config.rulesTitle?.color ?? FALLBACK_RULES_TITLE_COLOR](config.rulesTitle.label);

		console.log(styledRulesTitle);
	}

	if (config.rules && Array.isArray(config.rules)) {
		config.rules.forEach((rule) => {
			if (rule.label && rule.label.label) {
				const emoji = rule.emoji ? `${rule.emoji} ` : '';

				const styledRule = rule.label.bold
					? chalk[rule.label?.color ?? FALLBACK_RULE_COLOR].bold(rule.label.label)
					: chalk[rule.label?.color ?? FALLBACK_RULE_COLOR](rule.label.label);

				console.log(`- ${emoji}${styledRule}`);
			}
		});

		console.log('\n');
	}
};
