<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-17 01:01:23
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-20 21:51:59
-->
<template>
  <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem  } from 'components/common/swiper'
export default {
name: 'HomeSwiper',
components: {
  Swiper,
  SwiperItem
},
props: {
  banners: {
    type:Array,
    default() {
      return []
    }
  }
},
  data() {
    return {
      load: false
    };
  },
  computed: {},
  methods: {
    imageLoad() {
      if(!this.load) {
        this.$emit("swiperImageLoad"),
        this.load = true
      }
      
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>