<script>

  export default {
    props: {
      data: Object,
      deleteAll: Function,
    }
  }

</script>

<template>
  <div v-if="data.length == 0" class="text-center">
    <p class="display-text"> Awaiting Prompt </p>
  </div>

  
  <div v-else class="mx-4">
    <h1 @click="deleteAll" class="display-text"> Clear All</h1>
    <li v-for="(resp,index) in data" :key="index" class="list-none">
      <div class="card">
        <div class="flex flex-row justify-between">
          <h2 class="card-head" >Prompt</h2>
          <button @click="deleteHandle(index)">
            <img class="h-7 w-auto"  src="../../public/images/delete.svg" alt="delete icon" />
          </button>
        </div>
        <p class="card-text"> asdasda</p>
        <h2 class="card-head mt-6"> AI Response</h2>
        <p>{{resp.response}}</p>
      </div>
    </li>
  </div>
</template>