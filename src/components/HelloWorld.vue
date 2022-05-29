<template>
  <div>
    <p>{{ msg }}</p>
    <h1 class="text-blue-600">The quick brown fox...</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
