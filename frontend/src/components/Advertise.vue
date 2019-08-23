
<template>
  <div class="card" style="width: 18rem;">
    <img :src="src" class="card-img-top" alt="...">
  </div>
</template>
<script>
export default{
  props:['src']
}
</script>
<style scoped>
  .card{
    margin-right:auto;
    margin-left:auto;
  }
</style>