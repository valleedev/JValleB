<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
import BrowserMockupTalentoYa from './mockups/BrowserMockupTalentoYa.vue'
import PhoneMockupCuadreApp from './mockups/PhoneMockupCuadreApp.vue'

const checks = ['Menos Excel y WhatsApp', 'Control real de tu operación', 'Hecho a la medida de tu negocio']
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="mx-auto max-w-6xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span
          class="inline-block rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-mono tracking-wide text-text-secondary"
        >
          SISTEMAS Y AUTOMATIZACIONES A MEDIDA
        </span>

        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-text-primary text-balance">
          Tu negocio creció.<br />
          Tus procesos, no.<br />
          Yo construyo lo <span class="text-accent">que falta.</span>
        </h1>

        <p class="mt-6 text-lg text-text-secondary max-w-md">
          Sistemas y automatizaciones a medida para empresas de 10 a 40 empleados que están cansadas del desorden
          operativo.
        </p>

        <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <li v-for="c in checks" :key="c" class="flex items-center gap-2 text-sm text-text-secondary">
            <CheckCircle2 class="h-4 w-4 text-accent shrink-0" />
            {{ c }}
          </li>
        </ul>

        <div class="mt-8">
          <a
            href="#cta-final"
            class="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-bg hover:bg-accent-hover transition-colors"
          >
            Agendar diagnóstico gratuito
          </a>
          <p class="mt-3 text-xs text-text-secondary font-mono">Diagnóstico sin costo · 30-45 min · Online</p>
        </div>
      </div>

      <div class="relative">
        <BrowserMockupTalentoYa />
        <div class="absolute -bottom-8 -right-4 sm:right-4 lg:-right-8 z-10">
          <PhoneMockupCuadreApp />
        </div>
      </div>
    </div>
  </section>
</template>
