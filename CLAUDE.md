# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Este es un proyecto de e-commerce ("ecomerciante") construido con Astro v5 y TypeScript. Es una aplicación mínima de Astro que utiliza pnpm como gestor de paquetes.

## Comandos Principales

**Desarrollo:**
```bash
pnpm install    # Instala dependencias
pnpm dev        # Inicia servidor de desarrollo en localhost:4321
pnpm build      # Construye el proyecto para producción en ./dist/
pnpm preview    # Vista previa de la build localmente
```

**Astro CLI:**
```bash
pnpm astro ...         # Ejecuta comandos CLI de Astro
pnpm astro check       # Verifica tipos y errores
pnpm astro add         # Añade integraciones
pnpm astro -- --help   # Ayuda del CLI de Astro
```

## Arquitectura

- **Framework:** Astro v5 con TypeScript estricto
- **Estructura:** Aplicación SSG/SSR híbrida
- **Páginas:** En `src/pages/` - cada archivo se convierte en una ruta
- **Componentes:** Se recomienda usar `src/components/` para componentes reutilizables
- **Assets estáticos:** En `public/` - servidos directamente
- **Configuración TypeScript:** Extiende `astro/tsconfigs/strict`

## Desarrollo

- El proyecto usa pnpm como gestor de paquetes
- Los archivos `.astro` soportan componentes, scripts y estilos en el mismo archivo
- TypeScript está configurado en modo estricto
- El servidor de desarrollo incluye hot module replacement
- Los archivos en `src/pages/` se convierten automáticamente en rutas

## Extensiones Recomendadas

- `astro-build.astro-vscode` - Soporte oficial de Astro para VS Code