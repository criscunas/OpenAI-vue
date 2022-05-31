<script>
import PageHeader from './components/PageHeader.vue'
import HeroSection from './components/HeroSection.vue'
import HomeForm from './components/HomeForm.vue'
import RenderResults from './components/RenderResults.vue'


export default {
  name: 'App',
  data () {
    return {
      response : [],
    }
  },
  components: {
    PageHeader,
    HeroSection,
    HomeForm,
    RenderResults
  },
  methods : {
    async handleSubmit(value) {

      let obj = {
        prompt: value.prompt, 
        response: 'test response', 
      }

      this.response.push(obj)
      console.log(this.response)
    },
    clearResponses () {
      this.response = []
    }
  },
  
}
</script>



<template>
  <div class='bg-[#333533] h-screen'>
    <PageHeader/>
    <HeroSection/>
    <HomeForm :handler = "handleSubmit"/>
    <RenderResults :data = "response" :deleteAll = "clearResponses" />
  </div>
</template>

