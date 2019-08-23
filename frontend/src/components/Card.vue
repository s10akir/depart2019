
<template>
  <div class="card border-primary mb=3" style="width: 18rem;">
    <span v-if="isNew">
      <span class="badge badge-notify">NEW!</span>
    </span>
    <img :src="src" class="card-img-top" alt="...">
    <div class="card-body text-right">
      <h5 class="card-title">森永のおいしい牛乳</h5>
      <p class="card-subtitle">ファミリーマート 五反田店</p>
      <div class="card-body" style=" text-align:left;white-space: nowrap;">
      ¥90 
      <span class='pinkbold'>
         >>¥70
        </span>
      </div>
      <a href="#" class="btn btn-info"><b>詳細 >> </b></a>
    </div>
  </div>
</template>
<script>
export default{
  props:['src','item','shop','isNew']
}
</script>
<style scoped>
  .card{
    margin-right:auto;
    margin-left:auto;
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