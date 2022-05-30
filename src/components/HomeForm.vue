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
        if(this.formOne) {
          this.formOne = false
          this.formTwo = true
      }
    },
    handleFormTwo() {
      this.responseData.push(this.response)
      this.response = ''
        if(this.formTwo) {
          this.formTwo = false
          this.formThree = true
      }
    },
    submitForm() {
      this.response ? this.responseData.push(this.response) : null
      this.handler(this.responseData)
    }
  }
}
</script>

<template>
  <div v-if="formOne" class="m-4 p-4 max-w-md tablet:m-auto">
    <p class="pb-3 tablet:pb-5"> Enter Genre </p>
    <FormKit type="text" inner-class="border border-gray-400 rounded-lg overflow-hidden focus-within:border-blue-500"
      input-class="w-full h-8 px-3 border-none text-base text-gray-700 placeholder-gray-400" v-model="response" validation="required" />
    <div class="pt-3 text-right tablet:pt-5">
      <button @click="handleFormOne" class="btn"> Next </button>
    </div>
  </div>

  <div v-if="formTwo" class="m-4 p-4 max-w-md tablet:m-auto">
    <p class="pb-3 tablet:pb-5"> Favorite Author </p>
    <FormKit type="text" inner-class="border border-gray-400 rounded-lg overflow-hidden focus-within:border-blue-500"
      input-class="w-full h-8 px-3 border-none text-base text-gray-700 placeholder-gray-400" v-model="response" />
    <div class="pt-3 text-right tablet:pt-5">
      <button @click="handleFormTwo" class="btn"> Next </button>
    </div>
  </div>

  <div v-if="formThree" class="m-4 p-4 max-w-md tablet:m-auto">
    <p class="pb-3 tablet:pb-5"> Favorite Book </p>
    <FormKit type="text" inner-class="border border-gray-400 rounded-lg overflow-hidden focus-within:border-blue-500"
      input-class="w-full h-8 px-3 border-none text-base text-gray-700 placeholder-gray-400" v-model="response" />
    <div class="pt-3 text-right tablet:pt-5">
      <button @click="submitForm" class="btn"> Submit </button>
    </div>
  </div>
</template>
