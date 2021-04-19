<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-13 19:14:05
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-13 21:52:05
-->
<template>
  <div id="tab-bar-item" @click = 'itemClick'>
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style ='activeStyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    // 判断活跃
    isActive() {
      return this.$route.path.indexOf(this.path) !=  -1
    },
    activeStyle() {
      return this.isActive?{color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // vue新版本跳转重复路由就会报错
      this.$router.replace(this.path).catch((err) => err)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
  #tab-bar-item {
    /* 居中 */
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

 
</style>