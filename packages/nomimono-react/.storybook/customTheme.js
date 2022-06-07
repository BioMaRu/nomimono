import { create } from '@storybook/theming'
import logo from '../assets/images/logo-full-design-system.svg?v=2'

export default create({
	base: 'light',

	colorPrimary: '#9d53f9',
	colorSecondary: '#fc2385',
	//
	// // UI
	appBg: '#fef8ff',
	appContentBg: 'white',
	// appBorderColor: 'grey',
	appBorderRadius: 8,
	//
	// // Typography
	// fontBase: '"Open Sans", sans-serif',
	// fontCode: 'monospace',
	//
	// // Text colors
	textColor: 'black',
	textInverseColor: 'rgba(255,255,255,0.9)',
	//
	// // Toolbar default and active colors
	// barTextColor: 'silver',
	// barSelectedColor: 'black',
	// barBg: 'hotpink',
	//
	// // Form colors
	// inputBg: 'white',
	// inputBorder: 'silver',
	// inputTextColor: 'black',
	// inputBorderRadius: 4,
	//
	brandTitle: 'Nomimono UI framework',
	// brandUrl: '',
	brandImage: logo,
	// brandTarget: '_self',
})
