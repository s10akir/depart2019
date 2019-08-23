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
    <!--<h1>FOOSHEL</h1>-->
    <div class="rogo-case"><img src="../../assets/foodshellロゴ２.png" class="rogo"></div>
    <div><input type="text" placeholder="ユーザーID"></div>
    <div><input type="password" placeholder="パスワード"></div><br><br>
    <button　type="button" class="btn-gradient-radius">ログイン</button><br><br>
    <router-link to="#"><p class="forget">ID・パスワードを忘れた方はこちら</p></router-link>
        <router-link to="#"><button　type=button>登録</button></router-link>
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
  .rogo-case{
    height:245px;
    margin-top:30px;
  }
  .rogo{
    position:absolute;
    left:430px;
  }
  h1{
    margin-top:150px;
    font-size:150px;
    color:#EB9B9B;
  }
  input{
    width:700px;
    height:50px;
    border:1px solid #EB9B9B;
  }
  .btn-gradient-radius {
    display: inline-block;
    padding: 7px 20px;
    border-radius: 25px;
    text-decoration: none;
    color: white;
    background-color:#EB9B9B;
  }
  .forget{
    border-bottom-style:solid;
    border-bottom-color:#EB9B9B;
    border-width:2px;
    margin-bottom:30px;
    width:270px;
    margin-left:650px;
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

</style>