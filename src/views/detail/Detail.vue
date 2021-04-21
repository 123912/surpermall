<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-21 00:52:25
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-22 00:26:46
-->
<template>
  <div id="detail">
   <detail-nav-bar></detail-nav-bar>
   <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper.vue';
export default {
  components: {
    DetailNavBar ,
    DetailSwiper 
  },
name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  computed: {},
  methods: {},
  created() {
    //保存传入的iid
   this.iid =  this.$route.params.iid
    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      //获取顶部的轮播图数据
      this.topImages = res.data.result.itemInfo.topImages
    })
 },
  mounted() {}
};
</script>
<style scoped>
</style>