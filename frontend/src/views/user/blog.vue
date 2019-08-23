<template>
  <div id="app">
    <h4>商品を探す</h4>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="キーワード">
      <span class="input-group-btn">
        <button type="button" class="btn btn-outline-primary">検索</button>
      </span>
    </div>
    <br>
    <h5>最寄り駅から探す</h5>
    <button type="button" class="btn btn-outline-success">エリアを選択</button>
    <div id = "blog">
      <img src="../../assets/ad.png">
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
export default{
  components: {Card},
    data:function() {
      return {
        advertise:{src:"http://placehold.jp/300x250.png?text={広告}"},
        items:[
          {
            store_name: 'ファミリーマート五反田駅前店',
            item_name: '牛乳',
            original_price: '120',
            price: '100',
            image:"https://i.imgur.com/6RcZWWG.jpg",
            is_new: true
          },
          {
            store_name: 'ファミリーマート五反田駅前店',
            item_name: 'コーヒー',
            original_price: '148',
            price: '110',
            image:"https://i.imgur.com/6RcZWWG.jpg",
            is_new: true
          },
          {
            store_name: 'ファミリーマート五反田駅前店',
            item_name: 'ストロングゼロ',
            original_price: '250',
            price: '150',
            image:"https://i.imgur.com/6RcZWWG.jpg",
            is_new: true
          },
        ],
      }
    }
  }
</script>

<style>
h4 {
  color: #EB9B9B;
}

#app {
  padding-top: 30px;
}
</style>
