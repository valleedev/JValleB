<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#para-quien-es' },
]

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-colors"
    :class="scrolled ? 'bg-bg/90 backdrop-blur border-border' : 'bg-transparent border-transparent'"
  >
    <nav class="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-0.5 font-mono text-lg font-semibold text-text-primary">
        <span class="text-accent">&gt;</span>jvalleb
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="hidden md:block">
        <a
          href="#cta-final"
          class="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg hover:bg-accent-hover transition-colors"
        >
          Agendar diagnóstico
        </a>
      </div>

      <button class="md:hidden text-text-primary" @click="mobileOpen = !mobileOpen" aria-label="Abrir menú">
        <Menu v-if="!mobileOpen" class="h-6 w-6" />
        <X v-else class="h-6 w-6" />
      </button>
    </nav>

    <div v-if="mobileOpen" class="md:hidden border-t border-border bg-bg px-6 py-4 space-y-4">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block text-sm text-text-secondary hover:text-text-primary"
        @click="closeMobile"
      >
        {{ link.label }}
      </a>
      <a
        href="#cta-final"
        class="block text-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-bg hover:bg-accent-hover transition-colors"
        @click="closeMobile"
      >
        Agendar diagnóstico
      </a>
    </div>
  </header>
</template>
