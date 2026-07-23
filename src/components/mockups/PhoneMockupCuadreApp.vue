<script setup>
import { Wallet } from 'lucide-vue-next'

const rows = [
  { label: 'Ventas del día', value: '$ 2.674.891' },
  { label: 'Gastos del día', value: '$ 1.248.780' },
  { label: 'Efectivo en caja', value: '$ 1.426.111' },
]
</script>

<template>
  <div class="w-48 sm:w-56 rounded-[2rem] border border-border bg-elevated p-2 shadow-2xl shadow-black/50">
    <div class="rounded-[1.5rem] border border-border bg-surface overflow-hidden">
      <!-- status bar -->
      <div class="h-6 flex items-center justify-center">
        <div class="h-2.5 w-16 rounded-full bg-bg" />
      </div>

      <div class="px-4 pb-5 pt-1 space-y-3">
        <div class="flex items-center gap-1.5 text-text-primary font-mono text-xs font-medium">
          <Wallet class="h-3.5 w-3.5 text-accent" />
          <span>CuadreApp</span>
        </div>

        <div class="space-y-2">
          <div v-for="r in rows" :key="r.label" class="rounded-lg border border-border bg-elevated p-2.5">
            <p class="text-text-secondary text-[10px]">{{ r.label }}</p>
            <p class="text-text-primary font-mono text-sm font-semibold mt-0.5">{{ r.value }}</p>
          </div>
        </div>

        <button
          class="w-full rounded-lg bg-accent text-bg text-[11px] font-semibold py-2 hover:bg-accent-hover transition-colors"
        >
          Ver detalle
        </button>
      </div>
    </div>
  </div>
</template>
