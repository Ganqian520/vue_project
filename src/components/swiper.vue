<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper" style="height: 350px;width: 1200px;">
      <div class="swiper-slide" :key="banner" v-for="banner in banners" >
        <img :src="banner" style="width: 1200px;">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
	
	// import style (>= Swiper 6.x)
	import 'swiper/swiper-bundle.css'
  export default {
    data () {
      return {
        banners: [ '../imgs/1.jpg', '../imgs/2.jpg', '../imgs/3.jpg' ],
        swiperOption: {
			loop:true,
            pagination: {
            el: '.swiper-pagination',
			clickable: true
          },
		  autoplay:true
          // ...
        }
      }
    },
    mounted() {
      // console.log('Current Swiper instance object', this.mySwiper)
      // this.mySwiper.slideTo(0, 1000, false)
    },
	components: {
	    Swiper,
	    SwiperSlide
	  },
	  directives: {
	    swiper: directive
	  }
  }
</script>
