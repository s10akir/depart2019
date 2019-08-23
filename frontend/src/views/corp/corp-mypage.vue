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
        <p class="form-control">スーパーマーケット五反田店</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput" placeholder="スーパーマーケット五反田店">-->
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">ID</label>
        <p class="form-control">12345678</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="12345678">-->
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">パスワード</label>
        <p class="form-control">abcdefgh</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="abcdefgh">-->
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">営業時間</label>
        <p class="form-control">9:00~22:00</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="9:00~22:00">-->
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">最寄り駅</label>
        <p class="form-control">JR山手線・都営浅草線「五反田駅」</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="JR山手線・都営浅草線「五反田駅」">-->
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">住所</label>
        <p class="form-control">東京都品川区東五反田123-45</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="東京都品川区東五反田123-45">-->
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">電話番号</label>
        <p class="form-control">123-456-7890</p>
        <!--<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="123-456-7890">-->
      </div>
      </form>
      </div>
    <!--<div class="card1">
      <b-card
        title="Card Title"
        src="../../assets/crissy-jarvis-7PtZqfr-C10-unsplash.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>-->
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
    <!--<div class="card2">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>-->
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
  </div>
</template>

<script>
  import HomeIcon from "vue-material-design-icons/Home.vue"
  import AccountIcon from "vue-material-design-icons/Account.vue"
 
  export default{ components: {
    HomeIcon, AccountIcon
   }
  }
  props:['src','item','shop','isNew']

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
  form{
    float:left;
    width:600px;
    height:600px;
    position:absolute;
    left:90px;
    top:50px;
  }
  .title{
    width:80px;
    height:20px;
    position:absolute;
  }
  div #blog{
    width:100%;
    height:500px;
  }
  .card1{
    display:inline-block;
    position:absolute;
    left:470px;
    top:900px;
  }
  .card2{
    display:inline-block;
    position:absolute;
    left:820px;
    top:900px;
  }
  .info{
    border:2px solid #EB9B9B;
    width:800px;
    height:670px;
    position:absolute;
    top:170px;
    left:430px;
  }
  .card{
  position:absolute;
  top:1000px;
  left:500px;
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
