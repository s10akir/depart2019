<template>
  <div id="parent">
    <Header v-bind:pageTitle="this.pageTitle"></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from '../../components/Header'
export default{
  components: {Header},
    data:function() {
      return {
        pageTitle: "テスト"
      }
    }
  }
</script>
<style>
</style>
