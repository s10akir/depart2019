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
        <div class="img">
      <p class="img-post2">img</p>
    </div>
        <div class="img">
      <p class="img-post3">img</p>
    </div>
    <div class="home-text">
      <p>賞味期限間近の食品を安価で登録することで、<br>お客様に購入してもらうことができます。</p>
    </div>
    <div><router-link to="#"><button　type=button　class="regista">食品を登録する</button></router-link></div>
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
    width:300px;
    height:300px;
    margin-top:50px;
    position:absolute;
    left:50px;
    float:left;
    top:300px;
  }
    .img-post2{
    border:2px solid black;
    padding:100px;
    width:300px;
    height:300px;
    margin-top:50px;
    position:absolute;
    left:450px;
    float:left;
    top:300px;
  }
    .img-post3{
    border:2px solid black;
    padding:100px;
    width:300px;
    height:300px;
    margin-top:50px;
    position:absolute;
    left:850px;
    float:left;
    top:300px;
  }
  .img{
    width:300px;
    height:300px;
  }
  .home-text{
    position:absolute;
    top:700px;
    left:600px;
  }
  button{
    font-size: 1.4em;
    font-weight: bold;
    padding: 5px 70px;
    background-color: #91E0E6;
    color: #fff;
    border-style: none;
    box-shadow: 2px 2px 3px 1px #666;
    -moz-box-shadow: 2px 2px 3px 1px #666;
    -webkit-box-shadow: 2px 2px 3px 1px #666;
    border-radius:25px;
    margin-bottom:30px;
  }
  .regista{
    position:absolute;
    top:800px;
    left:600px;
  }

</style>