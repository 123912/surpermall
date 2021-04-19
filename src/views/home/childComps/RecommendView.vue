<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-17 15:05:52
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-17 15:49:40
-->
<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key ='index' class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
name: 'RecommendView', 
props: {
   recommends: {
    type: Array,
    default() {
      return []
    }
}},

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
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border: 10px solid  #eee;
  }
  .recommend-item {
    flex: 1;
  }
   .recommend-item img {
     width: 70px;
     height: 70px;
     margin-bottom: 10px;
   }
</style>