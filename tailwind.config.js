/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#fefefe',
				malachite: '#0ac763',
				silver: '#bdbcbc',
				cocoabrown: '#332927',
				boulder: '#b8b4b4',
				scarlet: '#ff1f18',
				cobalt: '#0252bc',
				black: '#333333',
				purple: '#5e18bb',
				purpleBg: '#f0e3fe',
				bg: '#fafaf8',
				orange: '#fc462d',
			},
			backgroundImage: {
				hero: "url('/src/assets/images/hero-banner.png')",
			},
			fontFamily: {
				poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
