# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Este es un proyecto de e-commerce ("Ecomerciante") construido con Astro v5 y TypeScript. Es una landing page SaaS que ofrece servicios de e-commerce para emprendedores colombianos, con sistema de afiliados incluido.

## Comandos Principales

**Desarrollo:**
```bash
pnpm install    # Instala dependencias
pnpm dev        # Inicia servidor de desarrollo en localhost:4321
pnpm build      # Construye el proyecto para producción en ./dist/
pnpm preview    # Vista previa de la build localmente
pnpm astro check # Verifica tipos y errores (comando para lint/typecheck)
```

**Astro CLI:**
```bash
pnpm astro add         # Añade integraciones de Astro
pnpm astro -- --help   # Ayuda del CLI de Astro
```

## Arquitectura

**Framework y Stack:**
- **Astro v5** con TypeScript estricto
- **Tailwind CSS** con integración @astrojs/tailwind
- **Tipografía:** Plugin @tailwindcss/typography incluido

**Estructura del proyecto:**
```
src/
├── components/          # Componentes reutilizables .astro
│   ├── Header.astro    # Navegación principal
│   ├── Footer.astro    # Footer del sitio
│   ├── Button.astro    # Botones estilizados (variants: primary, outline, secondary)
│   └── FAQ.astro       # Componente de preguntas frecuentes
├── layouts/
│   └── Layout.astro    # Layout principal con meta tags SEO optimizados
├── pages/
│   └── index.astro     # Landing page principal (single page)
└── styles/
    └── global.css      # Estilos globales CSS
```

**Características de Diseño:**
- **Tema oscuro:** Colores personalizados basados en paleta Astro (#4c1d95, #7c3aed, #2563eb)
- **Gradientes:** Fondos personalizados con degradados púrpura-azul 
- **Layout responsive:** Grid adaptable y componentes móvil-first
- **SEO optimizado:** Meta tags, OpenGraph y Twitter Cards configurados
- **Efectos visuales:** Bordes con glow, backdrop-blur, y transiciones suaves

## Landing Page Content

La página principal (`src/pages/index.astro`) incluye todas las secciones de marketing:

1. **Hero Section** - CTA principal con 3 botones de acción
2. **Problema-Solución** - Describe problemas del e-commerce tradicional
3. **Diferenciadores** - Ventajas competitivas (24h, sin comisiones, soporte)
4. **Planes y Precios** - 3 tiers (Básico $120k, Plus $280k, Personalizado)
5. **Proceso** - Cómo funciona en 3 pasos
6. **Sistema de Afiliados** - 40% comisión recurrente
7. **Social Proof** - Testimonios y estadísticas
8. **FAQ** - Preguntas frecuentes con componente expandible
9. **CTA Final** - Múltiples opciones de contacto

**Elementos interactivos:**
- Formularios de contacto vía WhatsApp
- Sistema de FAQ expandible
- Botones con variants (primary/outline/secondary)
- Calculadora de ganancias para afiliados

## Desarrollo

- **Gestor de paquetes:** pnpm únicamente
- **TypeScript:** Configuración estricta (astro/tsconfigs/strict)
- **Hot Reload:** Servidor de desarrollo con HMR automático
- **Routing:** File-based routing de Astro (.astro/.md archivos en src/pages/)
- **Componentes:** Formato .astro con frontmatter TypeScript
- **CSS:** Tailwind con clases utilitarias + estilos globales cuando necesario