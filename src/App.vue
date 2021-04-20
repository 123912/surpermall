<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-16 15:08:49
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-21 00:34:05
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'


export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
 @import 'assets/css/base.css';
</style>
