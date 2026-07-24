<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const preguntas = [
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Depende del alcance, pero la mayoría de proyectos se mueven entre 6 y 30 millones COP. En el diagnóstico te doy un precio cerrado antes de empezar.',
  },
  {
    q: '¿En cuánto tiempo lo entregas?',
    a: 'Trabajo por hitos, así que empiezas a ver avances desde las primeras semanas. El tiempo total depende del alcance, pero lo definimos juntos en la propuesta.',
  },
  {
    q: '¿Trabajas con empresas de cualquier tamaño?',
    a: 'Me enfoco en empresas de 10 a 40 empleados, donde el desorden operativo ya duele pero un sistema a medida todavía tiene sentido económico.',
  },
  {
    q: '¿Qué pasa si ya tengo un sistema y quiero mejorarlo?',
    a: 'Perfecto. Puedo auditar lo que ya tienes, identificar qué falta o qué está fallando y construir sobre eso en vez de empezar de cero.',
  },
  {
    q: '¿Cómo es el diagnóstico?',
    a: 'Es una llamada de 30-45 minutos, sin costo, donde entiendo tu operación, tus procesos actuales y tus principales dolores. Al final te digo si puedo ayudarte y cómo.',
  },
]

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="border-t border-border">
    <div class="mx-auto max-w-3xl px-6 py-20 lg:py-28">
      <h2 v-reveal class="text-3xl sm:text-4xl font-bold text-text-primary text-center">Preguntas frecuentes</h2>

      <div v-reveal="{ delay: 100 }" class="mt-12 divide-y divide-border rounded-xl border border-border bg-surface overflow-hidden">
        <div v-for="(item, i) in preguntas" :key="item.q">
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-elevated/50"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span class="text-text-primary font-medium">{{ item.q }}</span>
            <ChevronDown
              class="h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300"
              :class="openIndex === i && 'rotate-180 text-accent'"
            />
          </button>
          <div
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
