<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-21 00:52:25
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-23 00:51:24
-->
<template>
  <div id="detail">
   <detail-nav-bar class="detail-nav"></detail-nav-bar>
   <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
   </scroll>
  
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail ,Goods, Shop, GoodsParam} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';

import Scroll from 'components/common/scroll/Scroll.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';

export default {
  components: {
    DetailNavBar ,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo 
  },
name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  computed: {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    //保存传入的iid
   this.iid =  this.$route.params.iid
    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res );
      const data = res.data.result;
      console.log(data);
      //获取顶部的轮播图数据
      this.topImages = res.data.result.itemInfo.topImages
    //获取商品信息，整合
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
    //保存商品详情信息
      this.detailInfo = data.detailInfo
    //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
  })
 },
  mounted() {}
};
</script>
<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>