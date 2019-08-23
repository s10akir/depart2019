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
    <h1>FOOSHEL</h1>
    <div><input type="text" value="ユーザーID"></div>
    <div><input type="password" value="パスワード"></div><br><br>
    <button　type="button" class="btn-gradient-radius">ログイン</button><br><br>
    <router-link to="#"><p class="forget">ID・パスワードを忘れた方はこちら</p></router-link>
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

</style>