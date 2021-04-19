<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-17 21:38:49
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-18 00:31:10
-->
<template>
  <div class="goods">
    <goods-list-item 
    v-for="(item, index) in goods" :key = 'index' :goods-item ="item" ></goods-list-item>
    
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue';
export default {
  components: { 
    GoodsListItem 
    },
name: 'GoodsList',
props: {
  goods: {
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
/* 均等分 */
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>