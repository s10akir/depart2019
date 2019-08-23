<template>
  <div id="app">
    <header>
      <ul>
        <li class=home-icon><home-icon /><p class="header-text">HOME</p></li>
        <li><router-link to="#"><p class="header-text">食品を登録する</p></router-link></li>
        <li><router-link to="#"><p class="header-text">編集</p></router-link></li>
        <li class="mypage"><account-icon /></li>
      </ul>
    </header>
    <div class="img">
      <p class="img-post">img</p>
    </div>
    <form>
      <div class="form-group">
        <label for="formGroupExampleInput">店名</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">最寄り駅</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      </div>
            <div class="form-group">
        <label for="formGroupExampleInput2">住所</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      </div>
            <div class="form-group">
        <label for="formGroupExampleInput2">営業時間</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      </div>
    </form>
  </div>
</template>

<script>
  import HomeIcon from "vue-material-design-icons/Home.vue"
  import AccountIcon from "vue-material-design-icons/Account.vue"
 
  export default{ components: {
    HomeIcon, AccountIcon
  }
  }

</script>

<style scoped>
  /*headerのcss-----------------------------------------------------------------------------*/
  header{
    height:80px;
    background-color:#EB9B9B;
  }
  header ul li .home-icon{
    float:left;
    list-style-type:none;
    margin:30px,30px,0,30px;
  }
  header ul li .header-text{
    float:left;
    margin-top:3px;
    color:white;
  }
  header ul li {
    float:left;
    list-style-type:none;
    margin:30px;
  }
  /*headerのcss------------------------------------------------------------------------------*/
  .img-post{
    border:2px solid black;
    padding:100px;
    width:600px;
    height:600px;
    margin-top:50px;
    position:absolute;
    left:50px;
    float:left;
  }
  form{
    float:left;
    width:600px;
    height:600px;
    position:absolute;
    left:750px;
    top:500px;
  }
  </style>
