<script setup>
import { CheckCircle2, AlertTriangle } from 'lucide-vue-next'

const puntos = [
  'Información dispersa en Excel, cuadernos y WhatsApp.',
  'No saber cuánto dinero hay realmente en caja.',
  'Falta de control real del equipo y sus tareas.',
  'Procesos manuales que generan errores.',
  'Decisiones a ciegas por falta de datos confiables.',
]
</script>

<template>
  <section class="border-t border-border">
    <div class="mx-auto max-w-6xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold leading-tight text-text-primary text-balance">
          Así se ve el <span class="text-accent">desorden operativo</span> cuando creces sin sistemas.
        </h2>

        <ul class="mt-8 space-y-4">
          <li v-for="p in puntos" :key="p" class="flex items-start gap-3">
            <CheckCircle2 class="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span class="text-text-secondary">{{ p }}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-border bg-surface p-8">
        <AlertTriangle class="h-6 w-6 text-warning" />
        <h3 class="mt-4 text-xl font-semibold text-text-primary text-balance">
          El problema no es tu gente. Son tus procesos.
        </h3>
        <p class="mt-3 text-text-secondary leading-relaxed">
          Cuando los procesos no están claros, todo se vuelve más caro, más lento y más estresante.
        </p>
      </div>
    </div>
  </section>
</template>
