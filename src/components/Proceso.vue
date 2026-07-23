<script setup>
import { ArrowRight } from 'lucide-vue-next'

const pasos = [
  {
    numero: '1',
    titulo: 'Diagnóstico',
    desc: 'Entiendo tu operación, cuellos de botella y lo que realmente necesitas.',
  },
  {
    numero: '2',
    titulo: 'Propuesta',
    desc: 'Te entrego una propuesta a medida con alcance, tiempos y precio cerrado.',
  },
  {
    numero: '3',
    titulo: 'Construcción por hitos',
    desc: 'Desarrollo iterativo, ves avances reales y das feedback.',
  },
  {
    numero: '4',
    titulo: 'Entrega y acompañamiento',
    desc: 'Entrego, capacito a tu equipo y quedo disponible para ajustar y escalar.',
  },
]
</script>

<template>
  <section class="border-t border-border">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <h2 v-reveal class="text-3xl sm:text-4xl font-bold text-text-primary text-center">
        Un proceso <span class="text-accent">claro</span>, sin rodeos.
      </h2>

      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        <template v-for="(paso, i) in pasos" :key="paso.numero">
          <div v-reveal="{ delay: i * 100 }" class="relative group">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-elevated font-mono text-sm text-accent transition-transform duration-300 group-hover:scale-110"
            >
              {{ paso.numero }}
            </div>
            <h3 class="mt-4 text-lg font-semibold text-text-primary">{{ paso.titulo }}</h3>
            <p class="mt-2 text-sm text-text-secondary leading-relaxed">{{ paso.desc }}</p>

            <ArrowRight
              v-if="i < pasos.length - 1"
              class="animate-arrow-slide hidden lg:block absolute top-2.5 -right-9 h-4 w-4 text-border"
              :style="{ animationDelay: `${i * 100}ms` }"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
