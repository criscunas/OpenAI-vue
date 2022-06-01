<script>
import PageHeader from './components/PageHeader.vue'
import HeroSection from './components/HeroSection.vue'
import HomeForm from './components/HomeForm.vue'
import RenderResults from './components/RenderResults.vue'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.VUE_APP_api_key,
});
const openai = new OpenAIApi(configuration);


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

    const completion = await openai.createCompletion(value.engine, {
      prompt: value.prompt,
      temperature: 0.5,
      top_p: 1.0,
      max_tokens: 80,
    });

    let obj = {
      response: completion.data.choices[0].text,
      prompt: value.prompt
    }

    this.response.push(obj)
    },
    clearResponses () {
      this.response = []
    },
    deleteSingle(id) {
      this.response.length == 1 ? this.response = [] : this.response = this.response.filter(ele => this.response.indexOf(ele) !== id)
    }
  },
  
}
</script>



<template>
  <div class='bg-[#333533] h-screen'>
    <PageHeader/>
    <div class="max-w-3xl px-4 py-8 :tablet m-auto">
    <HeroSection/>
    <HomeForm :handler = "handleSubmit"/>
    <RenderResults :data = "response" :deleteAll = "clearResponses" :deleteSingle = "deleteSingle" />
    </div>
  </div>
</template>

