<script>

export default {
  props : {
    handler: Function
  },
  data() {
    return {
      prompt: '',
      engine: '',
    }
  },
  methods: {
    submitForm() {
      
      let obj = {
        engine: this.engine,
        prompt: this.prompt
      }
      
      this.handler(obj)
      this.prompt = ''
    }
  }
}
</script>

<template>
  <div class="form-body">
    <p class="display-text pb-5"> Select AI Engine </p>
    <FormKit
      v-model = "engine"
      type = "radio"
      :options="[{label: 'Davinci', value: 'text-davinci-002'}, {label: 'Curie', value: 'text-curie-001'}, {label: 'Ada', value: 'text-ada-001'}, {label: 'Babbage', value: 'text-babbage-001'}]"
    />
  </div>

  <div class='form-body'>
    <p class="display-text pb-4 tablet:pb-5"> Ask away </p>
    <FormKit 
      type="textarea" 
      inner-class="form-inner"
      input-class="form-input" 
      v-model="prompt" 
      rows = "10"
      placeholder="Enter Prompt"
    />
    <div class="form-btn">
      <button @click="submitForm" class="btn"> Submit </button>
    </div>
  </div>
</template>

<style>
  .formkit-options {
    display: flex;
    justify-content: space-between;
    color: white;
  }
</style>