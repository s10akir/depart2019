
<template>
  <div class="card border-primary mb=3" style="width: 18rem;">
    <span v-if="is_new">
      <span class="badge badge-notify">NEW!</span>
    </span>
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body text-right">
      <h5 class="card-title">{{ item_name }}</h5>
      <p class="card-subtitle">{{ store_name }}</p>
      <div class="card-body" style=" text-align:left;white-space: nowrap;">
        ¥{{ original_price }}
      <span class='pinkbold'>
        >>¥{{ price }}
        </span>
      </div>
      <a href="#" class="btn btn-info"><b>詳細 >> </b></a>
    </div>
  </div>
</template>
<script>
export default{
  props: [
    'item_name',
    'store_name',
    'image',
    'original_price',
    'price',
    'is_new',
  ]
}
</script>
<style scoped>
  .card{
    margin-right:auto;
    margin-left:auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .badge-notify{
   background:red;
   position:relative;

   top: auto;
   float:left;
  }
  .pinkbold{
    color:#EB9B9B;
    font-size:25px;
    font-weight:bold;
  }
  .btn-info{
    background:#91E0E6
  }
</style>
