<script>
  export default {
    props: {
      data: Object
    }
  }

</script>

<template>
  <div class="text-center">
    <p> {{data || 'awaiting' }} </p>
    {{data}}
  </div>
</template>