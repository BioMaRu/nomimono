export function asValue(k: string | number, property: string) {
	switch (k) {
		case '50pct':
			return '50%'
		case '100pct':
			return '100%'
		case 'max':
			return '9999px'
		case 'at':
			return 'auto'
		case 'ihr':
			return 'inherit'
		case 'us':
			return 'unset'
		case 'crcl':
			return 'currentColor'
		case 'tpr':
			return 'transparent'
		default:
			return window
				.getComputedStyle(document.documentElement)
				.getPropertyValue(`--${property}-${k}`)
	}
}

export function asProperty(k: string | number, property: string) {
	switch (k) {
		case '50pct':
			return '50%'
		case '100pct':
			return '100%'
		case 'max':
			return '9999px'
		case 'at':
			return 'auto'
		case 'ihr':
			return 'inherit'
		case 'us':
			return 'unset'
		default:
			return `var(--${property}-${k})`
	}
}
