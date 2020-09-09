<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  // props: {
  //   list: Array
  // },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        speed: 2000
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/9dbec1a468fd5c198be3a81600b30c5c.jpg_890x330_ecf160e3.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8216fd250c35366befc35f6353f934b9.jpg_890x330_9062b3ba.jpg'
        }
      ]
    }
  }
  // computed: {
  //   showSwiper () {
  //     return this.list.length
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
  background: #FFF
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 36.52%
  background: #eeeeee
  .swiper-img
    width: 100%
</style>
