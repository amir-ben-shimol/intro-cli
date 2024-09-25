/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import chalk from 'chalk';
import { register } from 'ts-node';
import type { IntroCliConfig } from '../types/config-types';

/**
 * loadUserConfig - Loads the user's custom configuration file.
 * @returns {Partial<IntroCliConfig>} - The user's configuration if found, or an empty object.
 */
export const loadUserConfig = (): Partial<IntroCliConfig> => {
	const tsConfigPath = resolve(process.cwd(), 'intro.config.ts');
	const cjsConfigPath = resolve(process.cwd(), 'intro.config.cjs');

	if (existsSync(tsConfigPath)) {
		try {
			register({
				compilerOptions: {
					module: 'commonjs',
				},
			});
			const configModule = require(tsConfigPath);

			return configModule.default;
		} catch (error) {
			console.error(chalk.red('❌ Error loading TypeScript config.', error));
			process.exit(1);
		}
	} else if (existsSync(cjsConfigPath)) {
		try {
			const configModule = require(cjsConfigPath);

			return configModule;
		} catch (error) {
			process.exit(1);
		}
	}

	console.log(chalk.yellow('⚠️ No custom config found. Using default config.'));

	return {};
};

/**
 * validateUserConfig - Validates the user's configuration to ensure it follows the structure.
 * @param {Partial<IntroCliConfig>} userConfig - The user's configuration.
 * @returns {boolean} - True if the configuration is valid, false otherwise.
 */
export const validateUserConfig = (userConfig: Partial<IntroCliConfig>): boolean => {
	if (!userConfig.bigTitle || typeof userConfig.bigTitle.label !== 'string') {
		console.error(chalk.red('❌ Error: bigTitle must be a string.'));

		return false;
	}

	if (!userConfig.welcomeMessage || typeof userConfig.welcomeMessage.label !== 'string') {
		console.error(chalk.red('❌ Error: welcomeMessage must be a string.'));

		return false;
	}

	if (!userConfig.rules || !Array.isArray(userConfig.rules) || !userConfig.rules.every((rule) => rule.label && typeof rule.label.label === 'string')) {
		console.error(chalk.red('❌ Error: rules must be an array of valid rule objects.'));

		return false;
	}

	return true;
};
