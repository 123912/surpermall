<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-13 16:43:43
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-13 19:08:27
-->
<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
name: 'TabBar',
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
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    

    /* 靠下 */
    position: fixed;
    left: 0%;
    right: 0%;
    bottom: 0%;

    /* 阴影 */
    box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.3);
  }
  
</style>