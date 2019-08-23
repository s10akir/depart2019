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
    <div class="info">
      <div class="title"><account-icon />Mypage</div>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">店名</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="スーパーマーケット五反田店">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">ID</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="12345678">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">パスワード</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="abcdefgh">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">営業時間</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="9:00~22:00">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">最寄り駅</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="JR山手線・都営浅草線「五反田駅」">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">住所</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="東京都品川区東五反田123-45">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">電話番号</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="123-456-7890">
        </div>
      </form>
    </div>
    <router-link to="#"><button type=button>登録</button></router-link>
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
  .title{
    width:80px;
    height:20px;
    position:absolute;
  }
  .img-post{
    border:2px solid black;
    padding:100px;
    width:600px;
    height:600px;
    margin-top:50px;
    position:absolute;
    left:50px;
  }
  form{
    float:left;
    width:600px;
    height:600px;
    position:absolute;
    left:90px;
    top:50px;
  }
  .info{
    border:2px solid #EB9B9B;
    width:800px;
    height:670px;
    position:absolute;
    top:170px;
    left:430px;
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
    position:absolute;
    top:850px;
    right:660px;
  }
  </style>