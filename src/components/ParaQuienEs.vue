<script setup>
import { CheckCircle2, XCircle } from 'lucide-vue-next'

const siEres = [
  'Tienes entre 10 y 40 empleados.',
  'Tu operación depende de Excel, cuadernos o WhatsApp.',
  'Quieres tener control real de tu negocio.',
  'Estás listo para invertir entre 6 y 30 millones COP en mejorar tu operación.',
]

const noEres = [
  'No estás dispuesto a cambiar la forma en que operas.',
  'Buscas solo "barato" o "rápido" sin importar la calidad.',
  'No tienes claridad mínima de tu operación actual.',
]
</script>

<template>
  <section id="para-quien-es" class="border-t border-border">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <h2 v-reveal class="text-3xl sm:text-4xl font-bold text-text-primary text-center">Para quién es esto</h2>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-reveal class="rounded-xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent/40">
          <h3 class="text-lg font-semibold text-text-primary">Es para ti si...</h3>
          <ul class="mt-5 space-y-4">
            <li v-for="p in siEres" :key="p" class="flex items-start gap-3">
              <CheckCircle2 class="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span class="text-text-secondary">{{ p }}</span>
            </li>
          </ul>
        </div>

        <div v-reveal="{ delay: 120 }" class="rounded-xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-border">
          <h3 class="text-lg font-semibold text-text-primary">No es para ti si...</h3>
          <ul class="mt-5 space-y-4">
            <li v-for="p in noEres" :key="p" class="flex items-start gap-3">
              <XCircle class="h-5 w-5 text-text-secondary shrink-0 mt-0.5" />
              <span class="text-text-secondary">{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
