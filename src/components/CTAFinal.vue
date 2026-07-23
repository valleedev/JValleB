<script setup>
import { ArrowRight, Mail, MessageCircle } from 'lucide-vue-next'

const CTA_LINK = 'https://wa.me/573225996532'
const EMAIL = 'jvalleb@voida.com.co'
const WHATSAPP_DISPLAY = '+57 322 599 6532'
</script>

<template>
  <section id="cta-final" class="border-t border-border">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div v-reveal class="rounded-2xl border border-border bg-surface px-8 py-14 sm:px-16 sm:py-16 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-text-primary text-balance">
          Hablemos de tu operación. Agendemos un <span class="text-accent">diagnóstico gratuito</span>.
        </h2>
        <p class="mt-4 text-text-secondary max-w-xl mx-auto">
          30-45 minutos para entender tu negocio y ver cómo puedo ayudarte.
        </p>

        <a
          :href="CTA_LINK"
          target="_blank"
          rel="noopener noreferrer"
          class="group mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-bg transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] active:scale-[0.98]"
        >
          Agendar diagnóstico
          <ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-text-secondary">
          <a :href="`mailto:${EMAIL}`" class="flex items-center gap-2 hover:text-text-primary transition-colors">
            <Mail class="h-4 w-4 text-accent" />
            {{ EMAIL }}
          </a>
          <a :href="CTA_LINK" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-text-primary transition-colors">
            <MessageCircle class="h-4 w-4 text-accent" />
            {{ WHATSAPP_DISPLAY }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
