<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-22 00:28:55
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-22 00:56:31
-->
<template>
  
    <swiper class="detail-swiper">
      <swiper-item  v-for="(item, index) in topImages" :key='index' >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
 
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
export default {
  components: { 
    Swiper,
    SwiperItem 
  },
name: 'DetailSwiper',
props: {
  topImages : {
    type: Array,
    default() {
      return []
    }
  }
},
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>