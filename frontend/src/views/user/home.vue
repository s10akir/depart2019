<template>
	<div id="app">
		<h1>FOOSHEL</h1>
		<Slider></Slider>
		<router-link to="/user/login"><button type="button" class="btn btn-outline-primary">Login</button></router-link>
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