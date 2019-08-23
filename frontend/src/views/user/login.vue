<template>
	<div id="app">
		<h1>FOOSHEL</h1>
		<h2>ユーザーとしてのログイン</h2>
		<label>ユーザーID</label>
		<input type="text"><br>
		<label>パスワード</label>
		<input type="text"><br>
		<router-link to="/user/main">
			<button type="button" class="btn btn-outline-primary">
				Login
			</button>
		</router-link>
	</div>
</template>


<style>
</style>