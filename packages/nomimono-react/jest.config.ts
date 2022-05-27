/* eslint-disable */
export default {
	displayName: 'nomimono-react',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/packages/nomimono-react',
}
