/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Tema oscuro Astro (basado en CSS real)
				astro: {
					// Fondos del CSS real
					bg: '#17191e',        // --ec-codeBg del CSS
					surface: '#23262d',   // --ec-frm-trmBg 
					hover: '#3d4dfff0',   // --ec-codeSelBg
					border: '#34384141',  // border colors del CSS
					// Gradientes principales (exactos del CSS)
					purple: '#b845ed',    // Del gradiente real
					blue: '#3245ff',      // Del gradiente real  
					pink: '#ff1b6b',      // Rosa/magenta
					cyan: '#45ffbc',      // Cian accent
					// Texto del CSS real
					text: {
						primary: '#ffffff',   // Blanco texto
						secondary: '#bfc1c9', // rgb(191 193 201) del CSS
						muted: '#858b98',     // colores muted del CSS
					}
				},
				// Mantenemos algunos GitHub colors para botones
				github: {
					blue: '#58a6ff',
					green: '#3fb950',
					purple: '#a5a6ff',
					orange: '#ffa657',
					red: '#f85149',
				},
				// Redefino primary para usar astro colors
				primary: {
					50: '#ffffff',
					100: '#e2e8f0', 
					200: '#cbd5e1',
					300: '#94a3b8',
					400: '#64748b',
					500: '#475569',
					600: '#334155',
					700: '#2a1b4d',
					800: '#1e1535',
					900: '#1a0b2e',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				// Gradientes Astro auténticos (del CSS real descargado)
				'astro-primary': 'linear-gradient(83.21deg, #3245ff, #b845ed)', // Gradiente exacto
				'astro-stardust': 'linear-gradient(270deg, #bc52ee1a 100%, #3245ff4d)',
				'astro-stardust-alt': 'linear-gradient(270deg, #40debf4d, #334ba94d)', 
				'astro-hero': 'linear-gradient(135deg, #17191e 0%, #23262d 50%, #34384141 100%)',
				'astro-section': 'linear-gradient(180deg, #17191e 0%, #23262d 100%)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}