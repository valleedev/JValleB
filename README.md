# jvalleb — landing page

Landing estática de una sola página. Vue 3 + Vite + Tailwind CSS. Sin backend, sin llamadas a API.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Tailwind CSS
- lucide-vue-next (íconos)
- pnpm

## Comandos

```bash
pnpm install     # instalar dependencias
pnpm dev         # levantar entorno de desarrollo (localhost:5173)
pnpm build       # build de producción → carpeta dist/
pnpm preview     # previsualizar el build de producción
```

## Estructura

```
src/
  components/
    Navbar.vue
    Hero.vue
    Problema.vue
    Proceso.vue
    Servicios.vue
    Proyectos.vue
    ParaQuienEs.vue
    FAQ.vue
    CTAFinal.vue
    Footer.vue
    mockups/
      BrowserMockupTalentoYa.vue
      PhoneMockupCuadreApp.vue
  App.vue
  main.js
  style.css
tailwind.config.js
vite.config.js
```

## Pendiente antes de publicar

En `src/components/Footer.vue` ajustar los links de Instagram/LinkedIn al perfil real.
