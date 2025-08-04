<template>
  <div>
    <PrimeiroComponente />
    <p>O dado de app é: {{ nome }}</p>
    <LifeCycle />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle
    },
    data() {
      return {
        nome: 'Teste'
      }
    }
  }
</script>