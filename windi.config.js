import { defineConfig } from 'windicss/helpers';
import { windi, flat } from './src/lib/styles/theme';

export default defineConfig({
	darkMode: 'class',
	plugins: [require('windicss/plugin/typography'), require('tailwind-accent-color')()],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: 'unset',
						h1: {
							color: 'unset'
						},
						h2: {
							color: 'unset'
						},
						h3: {
							color: 'unset'
						},
						h4: {
							color: 'unset'
						}
					}
				}
			}
		},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			...flat
		}
	}
});
