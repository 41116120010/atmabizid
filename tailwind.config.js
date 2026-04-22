/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				'crimson-text': ['"Crimson Text"', 'serif'],
			},
		},
	},
	plugins: [],
};
