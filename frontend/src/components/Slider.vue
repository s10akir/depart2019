<template>
<div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="フーシェルは賞味期限が迫り、割引価格で販売されている食品を検索できるサービスです"
      img-src="https://placehold.jp/770077/000000/150x150.png?text=スライド１"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="食品や最寄駅などから絞り込み検索することができます"
      img-src="https://placehold.jp/777700/000000/150x150.png?text=スライド２"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="お店をお気に入り登録しておけば情報をいち早く得ることができます"
      img-src="https://placehold.jp/007777/000000/150x150.png?text=スライド３"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>