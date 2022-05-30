<script>

export default {
  props : {
    handler: Function
  },
  data() {
    return {
      formOne: true,
      formTwo: false,
      formThree: false,
      responseData: [],
      response: '',
    }
  },
  methods: {
    handleFormOne() {
      this.responseData.push(this.response)
      this.response = ""
      this.formOne = false
      this.formTwo = true
    },
    handleFormTwo() {
      this.responseData.push(this.response)
      this.response = ''
      this.formTwo = false
      this.formThree = true
    },
    submitForm() {
      this.response ? this.responseData.push(this.response) : null
      this.handler()
    }
  }
}
</script>

<template>
  <div v-if="formOne" class='form-body'>
    <p class="pb-3 tablet:pb-5"> Enter Genre </p>
    <FormKit 
      type="text" 
      inner-class="form-inner"
      input-class="form-input" 
      v-model="response" 
      validation="required" 
    />
    <div class="form-btn">
      <button @click="handleFormOne" class="btn"> Next </button>
    </div>
  </div>

  <div v-if="formTwo" class="form-body">
    <p class="pb-3 tablet:pb-5"> Favorite Author </p>
    <FormKit 
      type="text" 
      inner-class="form-inner"
      input-class="form-input" 
      v-model="response" 
    />
    <div class="form-btn">
      <button @click="handleFormTwo" class="btn"> Next </button>
    </div>
  </div>

  <div v-if="formThree" class="form-body">
    <p class="pb-3 tablet:pb-5"> Favorite Book </p>
    <FormKit 
      type="text" 
      inner-class="form-inner"
      input-class="form-input" 
      v-model="response" 
    />
    <div class="form-btn">
      <button @click="submitForm" class="btn"> Submit </button>
    </div>
  </div>
</template>
