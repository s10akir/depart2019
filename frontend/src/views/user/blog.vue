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
        v-for="item in items"
        :key="item.id"
        :image="item.image"
        :store_name="item.store_name"
        :item_name="item.item_name"
        :original_price="item.original_price"
        :price="item.price"
        :is_new="item.isNew"
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
        items:[
          {
            store_name: 'ファミリーマート五反田駅前店',
            item_name: '牛乳',
            original_price: '120',
            price: '100',
            image:"http://placehold.jp/250x250.png?text={モック画像1}",
            is_new: true
          },
          {
            store_name: 'ファミリーマート五反田駅前店',
            item_name: 'コーヒー',
            original_price: '148',
            price: '110',
            image:"http://placehold.jp/250x250.png?text={モック画像1}",
            is_new: true
          },
          {
            store_name: 'ファミリーマート五反田駅前店',
            item_name: 'ストロングゼロ',
            original_price: '250',
            price: '150',
            image:"http://placehold.jp/250x250.png?text={モック画像1}",
            is_new: true
          },
        ],
      }
    }
  }
</script>
