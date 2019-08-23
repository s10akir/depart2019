<template>
<div id="slide">
   <h1><img id="logo" src="../assets/logo.png"></h1>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    background="white"
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="フーシェルは賞味期限が迫り、割引価格で販売されている食品を検索できるサービスです"
      img-src="https://i.imgur.com/Sd9n1oi.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="食品や最寄駅などから絞り込み検索することができます"
      img-src="https://i.imgur.com/fFeRPhY.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="お店をお気に入り登録しておけば情報をいち早く得ることができます"
      img-src="https://i.imgur.com/2PCdYPW.png"
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

<style>
  .carousel-caption {
    position: relative !important;
    right: 0 !important;
    left: 0 !important;
  }
  .carousel-caption h3 {
    font-weight: 250;
    color: black !important;
    font-size: 18px !important;
    text-shadow: none !important;
  }

  input {
    font-size: 20px !important;
    border: none;
    border-bottom: solid 2px #EB9B9B;
  }

  .form {
    margin: 10px;
  }

#logo {
  width: 100%;
}

#slide {
  background-color: white !important;
}
</style>
