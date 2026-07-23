<script setup>
import { Instagram, Linkedin, Mail } from 'lucide-vue-next'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#para-quien-es' },
]

const socials = [
  { icon: Instagram, href: 'https://instagram.com/jvalleb', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/jvalleb', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jvalleb@voida.com.co', label: 'Correo' },
]
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div>
        <a href="#" class="flex items-center gap-0.5 font-mono text-lg font-semibold text-text-primary">
          <span class="text-accent">&gt;</span>JValleB
        </a>
        <p class="mt-2 text-sm text-text-secondary max-w-xs">
          Sistemas y automatizaciones a medida para empresas que quieren crecer.
        </p>
      </div>

      <div class="flex gap-6">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-4">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="s.label"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent/40 hover:-translate-y-0.5"
        >
          <component :is="s.icon" class="h-4 w-4" />
        </a>
      </div>
    </div>

    <div class="border-t border-border">
      <p class="mx-auto max-w-7xl px-6 py-5 text-xs text-text-secondary">
        © {{ new Date().getFullYear() }} JValleB. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
