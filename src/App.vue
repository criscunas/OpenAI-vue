<script>
import PageHeader from './components/PageHeader.vue'
import HeroSection from './components/HeroSection.vue'
import HomeForm from './components/HomeForm.vue'


export default {
  name: 'App',
  components: {
    PageHeader,
    HeroSection,
    HomeForm
  },
  methods : {
    handleSubmit(val) {
      console.log(val)
    }
  }
}
</script>



<template>
  <div class='bg-slate-800 h-screen'>
    <PageHeader/>
    <HeroSection/>
    <HomeForm :handler = "handleSubmit"/>
  </div>
</template>

