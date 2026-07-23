<script setup>
import { ArrowRight, Mail, MessageCircle } from 'lucide-vue-next'

// Placeholders — reemplazar por link real de WhatsApp o Calendly
const CTA_LINK = 'https://wa.me/00000000000'
const EMAIL = 'hola@jvalleb.com'
const WHATSAPP_DISPLAY = '+00 000 000 0000'
</script>

<template>
  <section id="cta-final" class="border-t border-border">
    <div class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div class="rounded-2xl border border-border bg-surface px-8 py-14 sm:px-16 sm:py-16 text-center">
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
          class="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-bg hover:bg-accent-hover transition-colors"
        >
          Agendar diagnóstico
          <ArrowRight class="h-4 w-4" />
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
