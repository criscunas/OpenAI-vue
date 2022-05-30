<script>
import PageHeader from './components/PageHeader.vue'
import HeroSection from './components/HeroSection.vue'
import HomeForm from './components/HomeForm.vue'
import RenderResults from './components/RenderResults.vue'
import {Configuration, OpenAIApi} from 'openai'

export default {
  name: 'App',
  data () {
    return {
      response : '',
    }
  },
  components: {
    PageHeader,
    HeroSection,
    HomeForm,
    RenderResults
  },
  methods : {
    async handleSubmit() {
      
      const configuration = new Configuration({
        apiKey: process.env.VUE_APP_api_Key
      })
      
      const openai = new OpenAIApi(configuration)

      const questions = [
        `Give me 3 books in the fiction genre`,
        'Give me 3 books by Dr.Seuss',
        'Give me 3 books similar to the The Catcher in the Rye'
      ]

      const answer = await Promise.all(
        questions.map(async(ques) => {
          const resp = await openai.createCompletion(process.env.VUE_APP_api_Engine, {
            prompt: ques,
            temperature: 1,
            top_p: 1.0,
            max_tokens: 20,
          })
          return resp.data.choices[0].text;
        })
      )

      console.log(answer)
    }
  },
  
}
</script>



<template>
  <div class='bg-slate-800 h-screen'>
    <PageHeader/>
    <HeroSection/>
    <HomeForm :handler = "handleSubmit"/>
    <RenderResults :data = "response" />
  </div>
</template>

