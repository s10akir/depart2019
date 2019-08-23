<template>
	<div id="app">
    <div class="box">
      <Slider></Slider>
    </div>
    <div class="container">

      <div>
        <input placeholder=ユーザーID>
      </div>
      <div>
        <input placeholder=パスワード>
      </div>

      <br>
      <div>
        <router-link to="/user/blog"><button type="button" class="btn btn-outline-primary">ログイン</button></router-link>
      </div>
      <br>
      <div>
        <a href="#">ID・パスワードを忘れた方はこちら</a>
      </div>
      <br>
      <div>
        <button class="btn btn-outline-success">新規登録</button>
      </div>
    </div>
	</div>
</template>
<script>
import Slider from '../../components/Slider'
export default{
	components:{Slider},
	data:function(){
		return {
		}
	}
}
</script>

<style scoped>
#app {
  background-color: rgba(0, 0, 0, 0) !important;
}

#box {
  background-color: white !important;
}

.container {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0) !important;
}

input {
  margin: 5px;
  border-radius: 5px;
  border: solid 2px #EB9B9B;
  font-size: 24px !important;
}
</style>
