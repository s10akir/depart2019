<template>
  <div id="app">
    <h2>{{username}} 様</h2>
    <div style="text-align:left;">
      <span class="settings">
      <img src="../../assets/baseline-settings-20px.svg">
      設定
      </span>
      <br/>
      <span class="userinfo">
      <img src="../../assets/baseline-mail_outline-24px.svg">
      メールアドレス
      </span>
      <br/>
      <span class="userinfo">
      <img src="../../assets/baseline-face-24px.svg">
      職種
      </span>
    </div>
  </div>
</template>
<script>
export default{
  created: function() {
    this.$parent.message='マイページ'
  },
  data:function(){
    return{
      username:"山田 花子"
    }
  }
}
</script>
<style >
.settings{
  color:#969696
}
.userinfo{
  color:#91E0E6
}
</style>