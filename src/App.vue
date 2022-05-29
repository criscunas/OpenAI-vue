<template>
  <div class='bg-slate-800 h-screen'>
    <PageHeader/>
    <HeroSection/>
  </div>
</template>

<script>

import PageHeader from './components/PageHeader.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    HeroSection
  }
}
</script>


