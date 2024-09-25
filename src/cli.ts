#!/usr/bin/env node

import chalk from 'chalk';
import { loadUserConfig, validateUserConfig } from './helpers/config';
import { renderOnboardingMessage } from './helpers/render-onboarding';

/**
 * run - The main function that handles displaying the onboarding message.
 */
const run = () => {
	const config = loadUserConfig();
	const isValidConfig = validateUserConfig(config);

	if (!isValidConfig) {
		console.error(chalk.redBright.bold('❌ Invalid configuration. Please check your config file.'));

		return;
	}

	renderOnboardingMessage(config);
};

run();
