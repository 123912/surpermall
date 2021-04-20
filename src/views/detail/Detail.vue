<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-21 00:52:25
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-21 01:02:46
-->
<template>
  <div>{{iid}}</div>
</template>

<script>
export default {
name: 'Detail',
  data() {
    return {
      iid: null
    };
  },
  computed: {},
  methods: {},
  created() {
   this.iid =  this.$route.params.iid
  },
  mounted() {}
};
</script>
<style scoped>
</style>