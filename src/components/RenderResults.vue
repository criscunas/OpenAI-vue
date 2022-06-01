<script>

  export default {
    props: {
      data: Object,
      deleteAll: Function,
      deleteSingle: Function,
    }
  }

</script>

<template>
  <div v-if="data.length == 0" class="text-center pt-6">
    <p class="display-text"> Awaiting Prompt </p>
  </div>

  
  <div v-else class="mx-4">
    <h1 @click="deleteAll" class="text-red-500 display-text hover:cursor-pointer py-6"> Clear All</h1>
    <div class="tablet:grid grid-cols-2 gap-3">
      <li v-for="(resp,index) in data" :key="index" class="list-none">
        <div class="card">
          <div class="flex flex-row justify-between">
            <h2 class="card-head" >Prompt</h2>
            <button @click="deleteSingle(index)">
              <img class="h-7 w-auto"  src="../../public/images/delete.svg" alt="delete icon" />
            </button>
          </div>
          <p class="card-text"> {{resp.prompt}}</p>
          <h2 class="card-head pt-6 "> AI Response</h2>
          <p>{{resp.response}}</p>
        </div>
      </li>
    </div>
  </div>
</template>