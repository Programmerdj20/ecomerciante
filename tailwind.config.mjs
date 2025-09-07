/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// GitHub inspired palette
				primary: {
					50: '#f6f8fa',
					100: '#eaeef2',
					200: '#d1d9e0',
					300: '#b3bcc5',
					400: '#8c959f',
					500: '#6e7681',
					600: '#57606a',
					700: '#424a53',
					800: '#32383f',
					900: '#24292f',
				},
				// Astro inspired gradients
				accent: {
					50: '#f0f4ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}