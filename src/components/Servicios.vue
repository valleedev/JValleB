<script setup>
import { Wrench, Workflow, Globe, ArrowRight } from 'lucide-vue-next'

const servicios = [
  {
    icon: Wrench,
    titulo: 'Diagnóstico + Sistema a medida',
    desc: 'Analizo tu operación y construyo el sistema que necesitas para tener control y tomar mejores decisiones.',
  },
  {
    icon: Workflow,
    titulo: 'Automatización de procesos',
    desc: 'Automatizo tareas repetitivas (reportes, flujos, notificaciones, integraciones) para que tu equipo se enfoque en lo importante.',
  },
  {
    icon: Globe,
    titulo: 'Presencia web seria',
    desc: 'Creo sitios web profesionales que proyectan confianza y te ayudan a cerrar más negocios.',
  },
]
</script>

<template>
  <section id="servicios" class="border-t border-border">
    <div class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <h2 class="text-3xl sm:text-4xl font-bold text-text-primary text-center">
        Servicios <span class="text-accent">principales</span>
      </h2>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(s, i) in servicios"
          :key="s.titulo"
          class="group flex flex-col rounded-xl border border-border bg-surface p-7 hover:border-accent/40 transition-colors"
        >
          <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-elevated">
            <component :is="s.icon" class="h-5 w-5 text-accent" />
          </div>

          <h3 class="mt-5 text-lg font-semibold text-text-primary">
            <span class="text-text-secondary font-mono text-sm mr-2">0{{ i + 1 }}.</span>{{ s.titulo }}
          </h3>
          <p class="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{{ s.desc }}</p>

          <ArrowRight class="mt-5 h-4 w-4 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  </section>
</template>
