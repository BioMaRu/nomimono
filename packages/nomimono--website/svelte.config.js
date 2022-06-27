import adapter from '@sveltejs/adapter-cloudflare'
import preprocess from 'svelte-preprocess'
import { isoImport } from 'vite-plugin-iso-import'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [isoImport()],
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE'],
		},

		alias: {
			$components: 'src/components',
		},
	},
}

export default config
