<!--
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-18 21:44:47
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-20 00:20:14
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core'
// import ObserveDom from '@better-scroll/observe-dom'
// import Pullup from '@better-scroll/pull-up'
// BScroll.use(Pullup)
// BScroll.use(ObserveDom)
export default {
  
name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      scroll: null,
      
    };
  },
  computed: {},
  methods: {
    scrollTo (x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  },
  created() {},
  
  updated() {
    //创建BScroll对象
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //     probeType: this.probeType,
    //     pullUpLoad: true,
    //    observeDom: true,
    //    click: true
    // }) 
    
    
    // //监听滚动的位置
    // this.scroll.on('scroll', (position) => {
    //   this.$emit("scroll", position);
    // })  
  },
  mounted() {
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //    probeType: 2,
    //     pullUpLoad: true,
    //    observeDom: true,
    //    click: true
       
    // })
    // console.log(this.scroll);

    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      //  observeDom: true,
       click: true,
      //  mouseWheel: true,
      //  disableMouse: false,
      //  disableTouch: false
    }) 
    //监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit("scroll", position);
    })  
    //3.监听上啦事件
    this.scroll.on("pullingUp", ()=> {
      console.log('123');
       this.$emit("pullingUp");
    })
  },
  
};
</script>
<style scoped>
</style>