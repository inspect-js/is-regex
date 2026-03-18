import ljharbConfig from '@ljharb/eslint-config/flat';

export default [
	...ljharbConfig,
	{
		rules: {
			'func-style': 'off',
			'id-length': ['warn'],
		},
	},
];
