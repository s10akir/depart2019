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
    <h1>食品を登録する</h1>
    <div class="add">
      <div class="info">
        <div><label>食品名　　　<input type="text" ></label></div>
        <div><label>賞味期限　　<input type="date"></label></div>
        <div><label>定価　　　　<input type="text"></label></div>
        <div><label>値下げ価格　<input type="text"></label></div>
      </div>
      <div class="img">
        <p class="img-post">img</p>
      </div>
    </div>
    <router-link to="#"><button　type=button onclick="location.href='http://localhost:8080/corp-mypage/'">登録</button></router-link>
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
    font-size:40px;
    color:#EB9B9B;
  }
  .img-post{
    border:2px solid black;
    padding:100px;
  }
  .add{
    text-align:center;
    height:350px;
    width:1000px;
    margin-left:500px;
    margin-top:50px;
  }
  .info{
    float:left;
    margin-right:40px;
    margin-top:20px;
  }
  .img{
    float:left;
  }
  input{
    width:200px;
    height:40px;
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
