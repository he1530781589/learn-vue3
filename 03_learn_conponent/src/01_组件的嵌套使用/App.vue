<template>
  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<style scoped>
</style>