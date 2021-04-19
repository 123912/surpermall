<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-16 22:42:45
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-16 23:00:17
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: 'NavBar',
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
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgb(100, 100, 100, .1);
  }
  .left, .right {
    width: 60px;
   
  }
  .center {
    flex: 1;
    
    
  }
</style>