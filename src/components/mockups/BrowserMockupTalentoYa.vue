<script setup>
import { Search, Bell, LayoutDashboard, Users, Clock, Wallet, FileText, BarChart3, Settings } from 'lucide-vue-next'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Empleados' },
  { icon: Clock, label: 'Asistencias' },
  { icon: Wallet, label: 'Nómina' },
  { icon: FileText, label: 'Documentos' },
  { icon: BarChart3, label: 'Reportes' },
  { icon: Settings, label: 'Configuración' },
]

const stats = [
  { label: 'Empleados activos', value: '38' },
  { label: 'Asistencias hoy', value: '35/38' },
  { label: 'Pendientes de nómina', value: '3' },
]

const chartPoints = '0,32 14,26 28,30 42,18 56,22 70,10 84,16 100,6'
</script>

<template>
  <div class="w-full rounded-xl border border-border bg-elevated shadow-2xl shadow-black/40 overflow-hidden">
    <!-- window chrome -->
    <div class="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
      <span class="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
      <span class="h-2.5 w-2.5 rounded-full bg-accent" />
      <div class="ml-3 flex-1 flex items-center gap-1.5 text-text-secondary text-xs font-mono">
        <span class="text-accent">›</span>
        <span>TalentoYa</span>
      </div>
      <Search class="h-3.5 w-3.5 text-text-secondary" />
      <Bell class="h-3.5 w-3.5 text-text-secondary" />
    </div>

    <div class="flex text-xs">
      <!-- sidebar -->
      <aside class="hidden sm:flex w-32 shrink-0 flex-col gap-1 border-r border-border bg-surface p-3">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="flex items-center gap-2 rounded-md px-2 py-1.5"
          :class="item.active ? 'bg-elevated text-text-primary' : 'text-text-secondary'"
        >
          <component :is="item.icon" class="h-3 w-3 shrink-0" :class="item.active && 'text-accent'" />
          <span class="truncate">{{ item.label }}</span>
        </div>
      </aside>

      <!-- main -->
      <div class="flex-1 p-4 space-y-3">
        <p class="text-text-secondary font-mono">Resumen general</p>
        <div class="grid grid-cols-3 gap-2">
          <div v-for="s in stats" :key="s.label" class="rounded-lg border border-border bg-surface p-2.5">
            <p class="text-text-secondary text-[10px] leading-tight">{{ s.label }}</p>
            <p class="text-text-primary font-mono text-sm font-semibold mt-1">{{ s.value }}</p>
          </div>
        </div>

        <div class="rounded-lg border border-border bg-surface p-3">
          <p class="text-text-secondary text-[10px] mb-2">Asistencias por día</p>
          <svg viewBox="0 0 100 36" class="w-full h-14" preserveAspectRatio="none">
            <polyline :points="chartPoints" fill="none" stroke="#22C55E" stroke-width="1.5" vector-effect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
