<template>
  <div>

    <!-- 分类列表模块 -->
    <el-container>
      <el-main>
        <div class="ClassIco" v-for="(item,i) in ClassArr" :key="i">
          <img class="RoundImg" :src="item.ImgMessage" alt="">
          <br/>
          {{item.text}}
        </div>
      </el-main>
    </el-container>
  
   
    <!-- 热门推荐模块 -->
    <el-container>
      <!-- 左侧无商品链接部分 -->
      <el-aside width="50vw">
       <div class="box1" width="50vw" v-for="(item,i) in Box1list" :key="i">
          <a :href="item.Box1ImgSrc">
            <div class="ImgOrderBox">
              <img :src="item.Box1ImgMessage" alt="" width="100%">
              <div class="ShadowBox"></div>
            </div>
          </a>
          <a :href="item.Box1UserSrc">
            <div>
              <div class="TextLine2">{{item.Box1Text}}</div>
              <div class="UserMessage">
                <span><img :src="item.Box1Icon" alt=""></span>
                <span>{{item.Box1Username}}</span>
              </div>
            </div>
          </a>
        </div>
      </el-aside>
      <!-- 右侧有商品链接部分 -->
      <el-aside width="50vw">
        <div class="box2" width="50vw" v-for="(item,i) in Box2list" :key="i" >
          <a :href="item.Box2ImgSrc">
            <div class="ImgOrderBox">
              <img :src="item.Box2ImgMessage" alt="" width="100%">
              <div class="ShadowBox">
                <div class="ProductAb">
                  <div>
                    <img :src="item.ProductImg" alt="" width="100%">
                  </div>
                  <div>
                    <p>{{item.ProductText}}</p>
                    <p>{{item.ProductPrice}}</p>
                  </div>
                </div> 
              </div>
            </div>
          </a>
           <a :href="item.Box2UserSrc">
            <div>
              <div class="TextLine2">{{item.Box2Text}}</div>
              <div class="UserMessage">
                <span><img :src="item.Box2Icon" alt=""></span>
                <span>{{item.Box2Username}}</span>
              </div>
            </div>
          </a>
        </div>
      
        
      </el-aside>
    </el-container>
   
  </div>
</template>
<script>

import Button from '../../element-ui/packages/button/src/button.vue'
import Head from './head.vue'
import Mall from './mall.vue'
import List from './mall.vue'

export default {
  name: 'Home',
  components: { Mall,Head},
    data () {
    return {
      msg:'',
      ClassArr:[
        { 
          id:1,
          text:"女装",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_2d5ha15814klee6i405dldc1l1fg2_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:2,
          text:"新人福利",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210127_28lafia2el07d272h21h0dk09dcgb_150x150.webp_999x999.v1c0.100.jpg '
        },
        { 
          id:3,
          text:"上衣",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_7llgl01h7l8la47ki60g90ij4ib1i_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:4,
          text:"女鞋",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_33aak1kgeegijhi3g4dl4l1d069h7_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:5,
          text:"裤子",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_16dal2iaj300ce73ada65g0514jlk_151x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:6,
          text:"护肤",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_2bdj4144677j5hlbdi5d490a2ad5c_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:7,
          text:"裙子",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_2lliak11gh3a6714a9k5ifi0e6b4l_135x135.jpg_640x640.v1cAC.40.webp '
        },
        { 
          id:8,
          text:"母婴",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_4jk839952i9aaac7jbh12jhgbkk88_151x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:9,
          text:"套装",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_571djje4gf3dj24cj6c24k6gl0kcl_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:10,
          text:"男装男鞋",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_6gkk1d58i9gfgba91k24kdkeke1jc_151x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:11,
          text:"内衣",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_30e0clik70137dhd2b51dkael0i88_151x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:12,
          text:"配饰",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_435b14j61676clgbd60k99d72d53j_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:13,
          text:"家具",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_130lgbae573k7ldlbll1djl6fc6d9_150x150.png_640x640.v1cAC.40.webp '
        },
        { 
          id:14,
          text:"包包",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/210218_51cdb7a3g5698612lg076465bk5d4_150x150.png_640x640.v1cAC.40.webp '
        }
      ],

      Box1list:[
        {
          id:1,
          Box1ImgSrc:'https://h5.mogu.com/brand-content/content-list.html?iid=12j9tde&type=recommend&acm=3.mce.1_19_1zm0r8y.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z6Y-t_r9fL9st7vt3Xd-pri_9_17tzki6-lc_201-mid_144013-pm_1923-idx_0&stickyId=12j9tde',
          Box1ImgMessage:'https://s5.mogucdn.com/mlcdn/c45406/210316_85d8kb0ci214742k7cl2lk1bfb6d3_607x1080.jpg_400x9999.v1c7E.70.webp',
          Box1Text:"零失手 !! 面试成功证件照发型 啦啦啦~面试成功率爆表!! 求职季毕业季和开学季来啦，四款简单好看显脸小有气质的证件照发型教程来啦!告别土圆肥，让你证件人见人夸！而且也特别适合这样去面试，非常有气质，精气神也特别好! @蘑菇穿搭酱",
          Box1UserSrc:'https://h5.mogu.com/brand-content/personal-homepage.html?uid=17tzki6&acm=3.mce.1_9_17tzki6.144013..r9fL9st7vt3XD.sd_130_130_115-aeid_101035_101816_103270-gi_r9fL9st7vt5z6Y-t_r9fL9st7vt3Xd-lid_1zm0r8y-pri_9_17tzki6-lc_201-mid_144013-pm_1923-idx_0&contentAcm=3.mce.1_19_1zm0r8y.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z6Y-t_r9fL9st7vt3Xd-pri_9_17tzki6-lc_201-mid_144013-pm_1923&isActor=false',
          Box1Icon:'https://s11.mogucdn.com/mlcdn/c45406/190914_57ed66l7dcb4cda4b827069bb5fe1_400x400.jpg_100x9999.v1c7E.70.webp',
          Box1Username:"米儿姐姐Mirror"
        },
        {
          id:2,
          Box1ImgSrc:'https://h5.mogu.com/brand-content/content-list.html?iid=12j3f0m&type=recommend&acm=3.mce.1_19_1zlucw6.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z70-t_r9fL9st7vt3Xd-pri_9_1fhfsnu-lc_201-mid_144013-pm_1923-idx_2&stickyId=12j3f0m',
          Box1ImgMessage:'https://s11.mogucdn.com/mlcdn/c45406/210306_51bik4df1133kh7k94b5cghc7i1b0_576x1024.jpg_400x9999.v1c7E.70.webp',
          Box1Text:"热巴的腿不仅细，更重要的是腿直，真是漫画腿！",
          Box1UserSrc:'https://h5.mogu.com/brand-content/personal-homepage.html?uid=1fhfsnu&acm=3.mce.1_9_1fhfsnu.144013..r9fL9st7vt3XD.sd_130_130_115-aeid_101035_101816_103270-gi_r9fL9st7vt5z70-t_r9fL9st7vt3Xd-lid_1zlucw6-pri_9_1fhfsnu-lc_201-mid_144013-pm_1923-idx_2&contentAcm=3.mce.1_19_1zlucw6.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z70-t_r9fL9st7vt3Xd-pri_9_1fhfsnu-lc_201-mid_144013-pm_1923&isActor=false',
          Box1Icon:'https://s5.mogucdn.com/mlcdn/c45406/210306_2hkf7ih0il4b8k975k3k16i20glg6_400x400.jpg_100x9999.v1c7E.70.webp',
          Box1Username:"卢九宁形体矫正中心"
        },
        {
          id:3,
          Box1ImgSrc:'https://pc.mogu.com/content/detail/index.html?iid=12gzqn8&ptp=31.uLWCe.0.0.3JbqZZvo',
          Box1ImgMessage:'https://s5.mogucdn.com/mlcdn/c45406/210201_1e67gkd6f18a5f82ecf1ddh546j34_590x1280.png_999x999.v1c0.100.webp',
          Box1Text:"新年快乐",
          Box1UserSrc:'https://h5.mogu.com/brand-content/personal-homepage.html?uid=12vtxkg&acm=3.mce.1_9_12vtxkg.144013..r9fL9st7vt3XD.sd_130_130_115-aeid_101035_101816_103270-gi_r9fL9st7vt5z79-t_r9fL9st7vt3Xd-lid_1zjqois-pri_9_12vtxkg-lc_201-mid_144013-pm_1923-idx_11&contentAcm=3.mce.1_29_1zjqois.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z79-t_r9fL9st7vt3Xd-pri_9_12vtxkg-lc_201-mid_144013-pm_1923&isActor=false',
          Box1Icon:'https://s5.mogucdn.com/b7/avatar/150707/1fwyrg_ieztoyrzgfqwmzrtgizdambqgyyde_400x400.jpg_100x9999.v1c7E.70.webp',
          Box1Username:"Angel琳琳521"
        },
        {
          id:4,
          Box1ImgSrc:'https://h5.mogu.com/brand-content/content-list.html?iid=12exhvy&type=recommend&acm=3.mce.1_19_1zhofri.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z7b-t_r9fL9st7vt3Xd-pri_9_1328p02-lc_201-mid_144013-pm_1923-idx_13&stickyId=12exhvy',
          Box1ImgMessage:'https://s5.mogucdn.com/mlcdn/c45406/201229_54dl51gik3i069j93bc6ka132iaf7_1080x1080.jpg_400x9999.v1c7E.70.webp',
          Box1Text:"用暖烘烘的羽绒服把自己裹住，是对冬天的尊重😃 狐狸领毛～简直就是冬天行走的暖炉 这款羽绒服强烈安利，保暖系数杠杠滴，而且还不失颜值",
          Box1UserSrc:'https://h5.mogu.com/brand-content/personal-homepage.html?uid=1328p02&acm=3.mce.1_9_1328p02.144013..r9fL9st7vt3XD.sd_130_130_115-aeid_101035_101816_103270-gi_r9fL9st7vt5z7b-t_r9fL9st7vt3Xd-lid_1zhofri-pri_9_1328p02-lc_201-mid_144013-pm_1923-idx_13&contentAcm=3.mce.1_19_1zhofri.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z7b-t_r9fL9st7vt3Xd-pri_9_1328p02-lc_201-mid_144013-pm_1923&isActor=false',
          Box1Icon:'https://s5.mogucdn.com/mlcdn/c45406/191007_0h9jhei9gfbgcla9j3k45f30h5lf7_400x400.jpg_100x9999.v1c7E.70.webp',
          Box1Username:"yfmx12355"
        }
        
      ],
      Box2list:[
        {
          id:1,
          Box2ImgSrc:'https://h5.mogu.com/brand-content/content-list.html?iid=12ix5jm&type=recommend&acm=3.mce.1_19_1zlo3f6.144013.101035-101816-103270.r9fL9st7vt3XD.sd_130_115-gi_r9fL9st7vt5z71-t_r9fL9st7vt3Xd-pri_9_13jmhi8-lc_201-mid_144013-pm_1923-idx_3&stickyId=12ix5jm&ptp=32._mf1_1239_4537.0.0.lNBIQioc',
          Box2ImgMessage:'https://s11.mogucdn.com/mlcdn/c45406/210221_68gelf0h648dghgb7h0934j5660dk_720x1280.png_999x999.v1c0.100.webp',
          Box2Text:"轻奢重工",
          Box2UserSrc:'https://pc.mogu.com/content/personal/index.html?uid=13jmhi8&ptp=31.LjfTab.0.0.cRQ6EP1s',
          Box2Icon:'https://s5.mogucdn.com/mlcdn/c45406/201030_5ddj7hccfe719kgd6d09a2kc9kkdb_400x400.jpg_100x9999.v1c7E.70.webp',
          Box2Username:"七妞妞吖",
          ProductImg:'https://s5.mogucdn.com/mlcdn/c45406/210221_7e5hb58ha5h09ja8jjf294j69g9kf_720x960.jpg_100x9999.v1c7E.70.webp',
          ProductText:"轻奢重工耳环蛇",
          ProductPrice:"￥39"
        },
        {
          id:2,
          Box2ImgSrc:'https://pc.mogu.com/content/detail/index.html?iid=12fcr6o&ptp=31.uLWCe.0.0.CNUa3plO',
          Box2ImgMessage:'https://s5.mogucdn.com/mlcdn/c45406/200824_3dg7g5ble9lhkijh27195944kbkbk_800x800.jpg_400x9999.v1c7E.70.webp',
          Box2Text:"【酷酷的八姐er】熊孩子 无添加糖低脂即食黑麦片400g",
          Box2UserSrc:'https://pc.mogu.com/content/personal/index.html?uid=1770gyy&ptp=31.LjfTab.0.0.RCdVdj5K',
          Box2Icon:'https://s5.mogucdn.com/mlcdn/c45406/210218_10i1k3dkhlg2l74l089672d022iec_400x400.jpg_100x9999.v1c7E.70.webp',
          Box2Username:"酷酷的八姐er",
          ProductImg:'https://s5.mogucdn.com/mlcdn/c45406/200824_3dg7g5ble9lhkijh27195944kbkbk_800x800.jpg_100x9999.v1c7E.70.webp',
          ProductText:"【酷酷的八姐er】熊孩子 无添加糖低脂即食黑麦片400g",
          ProductPrice:"￥32"
        },
        {
          id:3,
          Box2ImgSrc:'https://pc.mogu.com/content/detail/index.html?iid=12izzz8&ptp=31.uLWCe.0.0.5FVWJzIh',
          Box2ImgMessage:'https://s5.mogucdn.com/mlcdn/c45406/210228_1ai1ljckj098c16ja57h4485k68ge_1242x1656.jpg_400x9999.v1c7E.70.webp',
          Box2Text:"卸护二合一，亲肤棉布，无添加，拍2立减更划算！",
          Box2UserSrc:'https://h5.mogu.com/brand-content/personal-homepage.html?uid=14sa3y0&acm=3.mce.1_9_14sa3y0.144013..r9fL9st7vt3XD.IsZb_1-sd_130_130_115-aeid_101035_101816_103270-gi_r9fL9st7vt5z7c-t_r9fL9st7vt3Xd-lid_1zlqxus-pri_9_14sa3y0-lc_201-mid_144013-pm_090102k0qd-idx_14&contentAcm=3.mce.1_19_1zlqxus.144013.101035-101816-103270.r9fL9st7vt3XD.IsZb_1-sd_130_115-gi_r9fL9st7vt5z7c-t_r9fL9st7vt3Xd-pri_9_14sa3y0-lc_201-mid_144013-pm_090102k0qd&isActor=false',
          Box2Icon:'https://s5.mogucdn.com/mlcdn/c45406/210106_6hgf00ebfdd7ldk4c84fb7cieg1j8_400x400.jpg_100x9999.v1c7E.70.webp',
          Box2Username:"彩妆师华子",
          ProductImg:'https://s5.mogucdn.com/mlcdn/c45406/210106_6hgf00ebfdd7ldk4c84fb7cieg1j8_400x400.jpg_100x9999.v1c7E.70.webp',
          ProductText:"【彩妆师华子】colorkey珂拉琪清润卸妆湿巾40片",
          ProductPrice:"￥39"
        },
        {
          id:4,
          Box2ImgSrc:'https://h5.mogu.com/brand-content/content-list.html?iid=12jh8qk&type=recommend&acm=3.mce.1_26_1zm86m4.144013.101035-101816-103270.0LF9Vst7ItfAE.sd_130_115-gi_0LF9Ust7Ithh0f-r_107-bdt_2-t_r9fL9st7vt3Xd-pri_9_13xwitm-lc_201-mid_144013-pm_177-idx_37&stickyId=12jh8qk&ptp=32._mf1_1239_4537.0.0.lNBIQioc',
          Box2ImgMessage:'https://s11.mogucdn.com/mlcdn/c45406/210326_6l1131jiejdb21a500gl04ae4hdkg_810x1080.jpg_400x9999.v1c7E.70.webp',
          Box2Text:"在叶子直播间购买的自热火锅，不错👍价格优惠拍5免4，5盒只要19.9元，我自己加了肠和鱼丸，就是有点少，自己可以在加，价格在便宜很好吃",
          Box2UserSrc:'https://h5.mogu.com/brand-content/personal-homepage.html?uid=13xwitm&acm=3.mce.1_9_13xwitm.144013..0LF9Vst7ItfAE.sd_130_130_115-aeid_101035_101816_103270-gi_0LF9Ust7Ithh0f-r_107-bdt_2-t_r9fL9st7vt3Xd-lid_1zm86m4-pri_9_13xwitm-lc_201-mid_144013-pm_177-idx_37&contentAcm=3.mce.1_26_1zm86m4.144013.101035-101816-103270.0LF9Vst7ItfAE.sd_130_115-gi_0LF9Ust7Ithh0f-r_107-bdt_2-t_r9fL9st7vt3Xd-pri_9_13xwitm-lc_201-mid_144013-pm_177&isActor=false',
          Box2Icon:'https://s5.mogucdn.com/mlcdn/c45406/210324_7l95lieid7c8cal986f494jch7l40_400x400.jpg_100x9999.v1c7E.70.webp',
          Box2Username:"粘人的小鬼啦",
          ProductImg:'https://s11.mogucdn.com/mlcdn/c45406/210306_6h7df5kelg4k9hcg5lh6akf42ealc_760x760.jpg_100x9999.v1c7E.70.webp',
          ProductText:"在叶子直播间购买的自热火锅，不错👍价格优惠拍5免4，5盒只要19.9元，我自己加了肠和鱼丸，就是有点少，自己可以在加，价格在便宜很好吃",
          ProductPrice:"￥32"
        }
        
      ],
      count:0
    }
  },
   methods:{
      load () {
        this.count += 2
      }
      
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
a{
  text-decoration: none;
  color: #666;
  font-size: 14px;
}
.el-main{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 10px 0 0 0;
  background-color: #fff;
}
.ClassIco{
  text-align: center;
  width: 20%;
  height: 80px;
  background-color: #fff;
  font-size: 14px;
}
.el-aside{
  background-color: #F6F6F6;
}
.RoundImg{
  width: 40px;
  height: 40px;
}
.box1,.box2{
  margin-top: 10px;
  width: 45vw;
  border-radius:5px ;
  background-color: #fff;
  display: inline-block;
  overflow: hidden;
}
.TextLine2{
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding: 0 10px 0 10px;
  margin-top: 10px;
}
.UserMessage{
  line-height: 45px;
  height: 45px;
  padding: 0 10px 0 10px;
  text-align: left;
  color: #000;
  white-space: nowrap;
  font-size: 12px;
}
.UserMessage>span,img{
  vertical-align:middle;
}
.UserMessage>span>img{
  height: 25px;
  border-radius:50%;
}
.ImgOrderBox{
  position: relative;
}
.ShadowBox{
  position: absolute;
  bottom: 0;
  height: 130px;
  width: 100%;
  background-image: linear-gradient(0deg,rgba(0,0,0,.5),transparent);

}

.ProductAb{
  position: absolute;
  bottom: 10px;
  padding: 10px;
  display: flex;
}
.ProductAb>div:nth-child(1){
  width: 35px;
  height: 35px;
  border-radius:5px ;
  overflow: hidden;
}
.ProductAb>div:nth-child(2){
  margin-left: 10px;
  width: 120px;
  color: #fff;
}
.ProductAb>div:nth-child(2)>p{
  text-align: left;
  margin-block: 0;
}
.ProductAb>div:nth-child(2)>p:nth-child(1){
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
