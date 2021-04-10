<template >
<div>
    <el-header>
        <div class="icon-header">
          <el-button  icon="el-icon-s-grid" @click="changeList"></el-button>
          <el-input
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
          v-model="SelectInput">
          </el-input>
          <el-button  icon="el-icon-chat-dot-round"></el-button>
        </div>
      </el-header>
</div>
</template>
<script>

export default {
    name:'Header',
    data(){
        return{
          SelectInput:''
        }
    },
    methods:{
      changeList(){
        this.$emit('buttonList','list')
      }
    }
}
</script>
<style>

*{
  box-sizing: border-box;
}
.el-button{
  float: left;
  height: 40px;
  border: 1px solid #e5e5e5;
}
.el-input{
  margin:0 10px 0 10px;
  top: -10px;
}
.el-input>input{
  background-color: #eee;
}
.el-header{
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #e5e5e5;
  }
 
  .icon-header{
    height: 40px;
    width: 100%;
    line-height: 60px;
    padding: 8px;
    display: flex;
    justify-content: space-around;
  }
</style>