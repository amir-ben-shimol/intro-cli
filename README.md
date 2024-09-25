<p align="center">
    <img src="https://github.com/amir-ben-shimol/intro-cli/blob/main/assets/brand.png" width="450" />
</p>

<p align="center">
	<a href="https://github.com/amir-ben-shimol/intro-cli">
    	<img src="https://img.shields.io/github/actions/workflow/status/amir-ben-shimol/intro-cli/integrate.yaml?label=CI&logo=GitHub" alt="CI status">
  	</a>
	<a href="https://www.npmjs.com/package/intro-cli">
    	<img src="https://img.shields.io/npm/dm/intro-cli?logo=NPM" alt="npm downloads">
  	</a>
	<a href="https://github.com/amir-ben-shimol/intro-cli">
    	<img src="https://img.shields.io/npm/l/intro-cli" alt="npm license">
  	</a>
	<a href="https://github.com/amir-ben-shimol/intro-cli">
    	<img src="https://img.shields.io/npm/v/intro-cli?label=version" alt="version">
  	</a>
</p>

<hr />

# 🌈 Intro CLI

✨ **intro-cli** is a fully customizable CLI tool that helps onboard developers by displaying project guidelines, rules, and instructions when running a specific command. It allows users to define a welcome message, title, rules, and more directly in a config file.

## 🎬 Demo

![intro-cli](assets/demo.gif)

## 📦 Installation

Install the package as a dev dependency:

```bash
npm i -D intro-cli
```

## 🛠️ Usage

### Setting Up the intro Script

1. Add the following `prepare` script to your `package.json` to run the intro message automatically after running `npm install`:

```json
"scripts": {
  "prepare": "intro"
}
```

This ensures that whenever someone installs the dependencies, the intro message will display.

2. After installation, run the following command to manually trigger the intro script:

```bash
npx intro
```

This will display your welcome message, project rules, and more based on the configuration.

### Example Command Output

If configured with a big title, welcome message, and rules, it could look like this:

```bash
My Awesome Project
Welcome to My Awesome Project! Get ready to contribute 🚀

🎉✨🎉✨🎉✨🎉✨🎉✨

Please follow these guidelines:
🛂 Follow the coding standards at all times.
🚀 Make sure all tests pass before creating a pull request.
✅ Commit messages should be clear and follow our guidelines.
📦 Use semantic versioning when releasing updates.
```

## 📁 Configuration

You can fully customize the behavior of **intro-cli** by creating a configuration file in your project root.

### Configuration Options

| Option           | Type     | Description                                                                         |
| ---------------- | -------- | ----------------------------------------------------------------------------------- |
| `bigTitle`       | `Object` | Configures the large title displayed at the top of the message.                     |
| `welcomeMessage` | `Object` | The main welcome message displayed after the title.                                 |
| `welcomeDivider` | `Object` | A decorative divider displayed between sections (can be emojis or symbols).         |
| `rulesTitle`     | `Object` | The title for the rules section.                                                    |
| `rules`          | `Array`  | An array of rules, each with a label and optional emoji to display before the text. |

### Example `intro.config.ts` (ES6)

```ts
import type { IntroCliConfig } from 'intro-cli';

const config: IntroCliConfig = {
	bigTitle: {
		label: 'My Awesome Project',
		color: 'blueBright',
		bold: true,
	},
	welcomeMessage: {
		label: 'Welcome to My Awesome Project! Get ready to contribute 🚀',
		color: 'green',
		bold: true,
	},
	welcomeDivider: {
		label: '🎉✨🎉✨🎉✨🎉✨🎉✨',
		color: 'yellowBright',
		bold: false,
	},
	rulesTitle: {
		label: 'Please follow these guidelines:',
		color: 'cyan',
		bold: true,
	},
	rules: [
		{
			emoji: '🛂',
			label: {
				label: 'Follow the coding standards at all times.',
				color: 'magentaBright',
				bold: true,
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
	],
};

export default config;
```

### Example `intro.config.cjs` (CommonJS)

```js
module.exports = {
	bigTitle: {
		label: 'My Awesome Project',
		color: 'blueBright',
		bold: true,
	},
	welcomeMessage: {
		label: 'Welcome to My Awesome Project! Get ready to contribute 🚀',
		color: 'green',
		bold: true,
	},
	welcomeDivider: {
		label: '🎉✨🎉✨🎉✨🎉✨🎉✨',
		color: 'yellowBright',
		bold: false,
	},
	rulesTitle: {
		label: 'Please follow these guidelines:',
		color: 'cyan',
		bold: true,
	},
	rules: [
		{
			emoji: '🛂',
			label: {
				label: 'Follow the coding standards at all times.',
				color: 'magentaBright',
				bold: true,
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
	],
};
```

## 🛠️ Note for ES6 vs. CommonJS Users

-   **For ES6 users**: Create your configuration file as `intro.config.ts` and use `export default`.
-   **For CommonJS users**: Create your configuration file as `intro.config.cjs` and use `module.exports`.

## 👥 Authors

<a href="https://github.com/amir-ben-shimol">
    <img src="https://avatars.githubusercontent.com/u/105565954?s=400&u=01efa537bf4368251ffa05954d13aa1861073b39&v=4" height="50" />
</a>

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
