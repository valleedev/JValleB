import { ref, onMounted } from 'vue'

// Animates 0 -> target on mount. Returns a ref with the current integer value.
export function useCountUp(target, { duration = 1200, delay = 0 } = {}) {
  const value = ref(0)

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      value.value = target
      return
    }

    const start = performance.now() + delay
    function tick(now) {
      const elapsed = now - start
      if (elapsed < 0) {
        requestAnimationFrame(tick)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      value.value = Math.round(target * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })

  return value
}
