<script setup>
import { ArrowRight } from 'lucide-vue-next'
import BrowserMockupTalentoYa from './mockups/BrowserMockupTalentoYa.vue'
import PhoneMockupCuadreApp from './mockups/PhoneMockupCuadreApp.vue'
</script>

<template>
  <section id="proyectos" class="border-t border-border">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <h2 v-reveal class="text-3xl sm:text-4xl font-bold text-text-primary">Proyectos propios en validación</h2>

      <div class="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- TalentoYa -->
        <div v-reveal class="rounded-xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
          <span
            class="inline-block rounded-full border border-border bg-elevated px-2.5 py-1 text-[10px] font-mono tracking-wide text-accent"
          >
            PRODUCTO PROPIO
          </span>
          <h3 class="mt-4 text-xl font-semibold text-text-primary">TalentoYa</h3>
          <p class="mt-2 text-sm text-text-secondary leading-relaxed">
            Gestión de personal y nómina básica, asistencias, permisos, documentos y pagos.
          </p>
          <a
            href="#"
            class="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
          >
            Ver demo <ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <div class="mt-6">
            <BrowserMockupTalentoYa />
          </div>
        </div>

        <!-- CuadreApp -->
        <div
          v-reveal="{ delay: 120 }"
          class="rounded-xl border border-border bg-surface p-7 flex flex-col sm:flex-row sm:items-center gap-6 transition-colors duration-300 hover:border-accent/40"
        >
          <div class="flex-1">
            <span
              class="inline-block rounded-full border border-border bg-elevated px-2.5 py-1 text-[10px] font-mono tracking-wide text-accent"
            >
              PRODUCTO PROPIO
            </span>
            <h3 class="mt-4 text-xl font-semibold text-text-primary">CuadreApp</h3>
            <p class="mt-2 text-sm text-text-secondary leading-relaxed">
              Control de caja para negocios con efectivo. Ventas, gastos, arqueos y cierres de caja diarios.
            </p>
            <a
              href="#"
              class="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
            >
              Ver demo <ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
          <div class="mx-auto sm:mx-0 shrink-0">
            <PhoneMockupCuadreApp />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
