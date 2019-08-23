<template>
	<div id="app">
		<h1>FOOSHEL</h1>
		<h2>ユーザーとしてのログイン</h2>
		<label>{{userId}}</label>
		<input type="text"><br>
		<label>{{password}}</label>
		<input type="text"><br>
			<button type="button" class="btn btn-outline-primary" v-on:click="login">
				Login
			</button>
	</div>
</template>
<script>
import axios from 'axios'
export default{
  data:function() {
  return {
    userId:"",
    password:""
    }
  },
  methods:{
    login () {
      axios.post('/api/v1/user/login/',{"username":"abc","password":"abc123"}).then((response) => {
        if(response.data.status=='login success.')
        {
          alert('login success');
          this.$router.push('/user/main')
        }
        else
        {
          alert('login failed.');
        }
      }, (error) => {
        alert(error);
      })
    }
  }
}

</script>

<style>
</style>
