<template>
  <div id="app">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="テキスト入力欄">
      <span class="input-group-btn">
        <button type="button" class="btn btn-default">検索</button>
      </span>
    </div>
    <div id = "blog">
    <Advertise v-bind:src="advertise.src"/>
        <Card
        v-for="card in mockcards "
        :key="card.id"
        v-bind:src="card.src"
        v-bind:isNew="card.isNew"
        ></Card>
      </div>
    </div>
  </template>
<script>
import Card from '../../components/Card'
import Advertise from '../../components/Advertise'
export default{
  components: {Card,Advertise},
    data:function() {
      return {
        advertise:{src:"http://placehold.jp/300x250.png?text={広告}"},
        mockcards:[
          {src:"http://placehold.jp/250x250.png?text={モック画像1}",isNew:true},
          {src:"http://placehold.jp/250x250.png?text={モック画像2}",isNew:true},
          {src:"http://placehold.jp/250x250.png?text={モック画像3}",isNew:false}
        ]
      }
    }
  }
</script>