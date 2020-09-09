<template>
  <swiper :options="swiperOptions">
    <swiper-slide>
      <img
        src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/0bdded1796fc19087b5f620084009277.jpg_890x330_d5f58150.jpg"
      />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {}
    }
  }
}
</script>
