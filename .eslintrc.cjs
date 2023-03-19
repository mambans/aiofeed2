module.exports = {
	extends: [
		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
		// This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
		// Make sure it's always the last config, so it gets the chance to override other configs.
		"eslint-config-prettier",
	],
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			node: {
				paths: ["src"],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			typescript: {},
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"import/no-anonymous-default-export": [
			"error",
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowCallExpression: true, // The true value here is for backward compatibility
				allowNew: false,
				allowLiteral: true,
				allowObject: false,
			},
		],
	},
};
