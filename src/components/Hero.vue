<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
import BrowserMockupTalentoYa from './mockups/BrowserMockupTalentoYa.vue'
import PhoneMockupCuadreApp from './mockups/PhoneMockupCuadreApp.vue'

const checks = ['Menos Excel y WhatsApp', 'Control real de tu operación', 'Hecho a la medida de tu negocio']
</script>

<template>
  <section id="inicio" class="relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span
          class="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-mono tracking-wide text-text-secondary"
          style="animation-delay: 0ms"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span class="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
          </span>
          SISTEMAS Y AUTOMATIZACIONES A MEDIDA
        </span>

        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-text-primary text-balance">
          <span class="animate-fade-in-up block" style="animation-delay: 90ms">Tu negocio creció.</span>
          <span class="animate-fade-in-up block" style="animation-delay: 180ms">Tus procesos, no.</span>
          <span class="animate-fade-in-up block" style="animation-delay: 270ms"
            >Yo construyo lo <span class="text-accent">que falta.</span></span
          >
        </h1>

        <p
          class="animate-fade-in-up mt-6 text-lg text-text-secondary max-w-xl"
          style="animation-delay: 360ms"
        >
          Sistemas y automatizaciones a medida para empresas de 10 a 40 empleados que están cansadas del desorden
          operativo.
        </p>

        <ul class="animate-fade-in-up mt-6 flex flex-wrap gap-x-6 gap-y-2" style="animation-delay: 440ms">
          <li v-for="c in checks" :key="c" class="flex items-center gap-2 text-sm text-text-secondary">
            <CheckCircle2 class="h-4 w-4 text-accent shrink-0" />
            {{ c }}
          </li>
        </ul>

        <div class="animate-fade-in-up mt-8" style="animation-delay: 520ms">
          <a
            href="#cta-final"
            class="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-bg transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] active:scale-[0.98]"
          >
            Agendar diagnóstico gratuito
          </a>
          <p class="mt-3 text-xs text-text-secondary font-mono">Diagnóstico sin costo · 30-45 min · Online</p>
        </div>
      </div>

      <div class="relative animate-fade-in-up" style="animation-delay: 260ms">
        <div class="animate-float">
          <BrowserMockupTalentoYa />
        </div>
        <div class="absolute -bottom-8 -right-4 sm:right-4 lg:-right-8 z-10">
          <div class="animate-float" style="animation-delay: -3s">
            <PhoneMockupCuadreApp />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
