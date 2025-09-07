/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Paleta limpia Ecomerciante
				brand: {
					dark: '#13161c',      // Fondo oscuro elegante
					light: '#f3f4f6',     // Fondo claro suave  
					success: '#10B981',   // Verde marca (CTAs)
					primary: '#1E3A8A',   // Azul marca (enlaces)
					text: '#4B5563',      // Gris marca (texto secundario)
					white: '#ffffff',     // Texto principal
					muted: '#9CA3AF',     // Texto terciario
					border: '#E5E7EB',    // Bordes suaves
					surface: '#1F2937',   // Superficies secundarias oscuras
				}
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}