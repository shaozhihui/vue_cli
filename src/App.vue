<template>
    <div id="app">
          <!-- 引入头部Header组件 -->
          <Head v-on:buttonList="button($event)" v-if="HeadIf"/>
     <!-- <el-button  icon="el-icon-s-grid" @click="changeList"></el-button> -->
      <div class="FootTeb" v-if="FootShow">
        <div :class="index==i?'hover':'' " @click="tegglet(i)"
          v-for="(item,i) in tabList" 
          :key="i" >{{item.name}}</div>
      </div>
      <prince :is="showtab" keep-alive></prince>
    </div>
</template>

<script>

import row from '../element-ui/packages/row/src/row.js'
import Home from './components/Home.vue'
import Mall from '@/components/mall'
import User from '@/components/User'
import List from '@/components/list'
import Head from '@/components/head'

export default {
  components: { Home,Mall,User,List,Head},
  name: 'App',
  data(){
    return{
      tabList:[
        {'name':'首页','path':'home'},
        {'name':'商城','path':'mall'},
        {'name':'直播','path':'home'},
        {'name':'我','path':'user'}
        ],
      index:0,
      tabPosition: 'bottom',
      activeName2: 'first',
      showtab:'Home',
      msg:'',
      HeadIf:true,
      FootShow:true
    }
  },
  methods:{
      tegglet(i){
        this.index = i;
        // console.log(this.tabList[i].path);
        this.showtab = this.tabList[i].path;
        if(this.index==2){
          console.log(111);
          this.HeadIf = false;
        }else{
           this.HeadIf = true;
        }
      },
      button(msg){
        console.log(msg)
         this.showtab = msg;
         this.FootShow = false;
      }
      // changeList(){
      //   this.showtab = 'list';
      //   this.showtab = this.tabList[i].path;
      // }
  }
}
</script>

<style>
body{
  
  margin: 0;
}
#app {
  overflow: hidden;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background-color: #EFEFEF;
}
.FootTeb{
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #FFFFFF;
  height: 50px;
  line-height: 50px;
  border: 1px solid #E3E3E4;
  z-index: 999;

}
.hover{
  color: red;
}
</style>
