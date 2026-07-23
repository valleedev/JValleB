<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Problema from './components/Problema.vue'
import Proceso from './components/Proceso.vue'
import Servicios from './components/Servicios.vue'
import Proyectos from './components/Proyectos.vue'
import ParaQuienEs from './components/ParaQuienEs.vue'
import FAQ from './components/FAQ.vue'
import CTAFinal from './components/CTAFinal.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-bg">
    <Navbar />
    <main>
      <Hero />
      <Problema />
      <Proceso />
      <Servicios />
      <Proyectos />
      <ParaQuienEs />
      <FAQ />
      <CTAFinal />
    </main>
    <Footer />
  </div>
</template>
