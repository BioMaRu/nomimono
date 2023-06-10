import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$style: 'src/style',
			$services: 'src/services',
			$components: 'src/components',
			$types: 'src/@types',
		},
		version: {
			pollInterval: 60 * 1000, // 1m
		},
	},
}

export default config
