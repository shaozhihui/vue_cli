<template>
    <div>
      
      <div class="TopList">
        <div>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/190429_4d0jffeeefieijgkj39fgagik0i52_165x166.jpg" alt="" width="100%">
          <p>限时快抢</p>
        </div>
        <div>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/190203_2bdhlkh0l7il4hlc2jfb98kg2232k_165x165.jpg" alt="" width="100%">
          <p>热销榜单</p>
        </div>
        <div>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/190909_1i9ig5c4f0idfb2l83ejbfac9d4ke_248x248.jpg" alt="" width="100%">
          <p>好货精选</p>
        </div>
        <div>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/190910_57052df5hb286bifhl13ed65lajfc_248x248.png" alt="" width="100%">
          <p>新品快抢</p>
        </div>
      </div>
      
      <el-container>
        <el-main>
          <div class="ClassIco" v-for="(item,i) in ClassArr" :key="i">
            <img class="RoundImg" :src="item.ImgMessage" alt="">
            <br/>
            {{item.text}}
          </div>
        </el-main>
      </el-container>

      <img src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png_1200x9999.v1c7E.81.webp" alt="" width="100%">
      <div class="ProductListBox">
        <div class="ProductBox" v-for="(item,i) in ProductListMessage" :key="i">
          <a :href="item.Href">
            <img :src="item.ImgSrc" alt="" width="100%">
             <div>
              <p> {{item.Text}}</p>
              <p> <span>{{item.Price}}</span><span>{{item.Icon}}<i class="el-icon-star-off"></i></span></p>
              <p> 立即购买</p>
            </div>
          </a>
         
        </div>
       
        
      </div>
      
    </div>
</template>
<script>
import Head from './head.vue'


  export default {
    name:'Mall',
    components: {Head},
    data () {
      return {
        ClassArr:[
        { 
          id:1,
          text:"女装",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/190903_71ih092j1k9chh2bjdghh2jl054a4_150x150.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:2,
          text:"上衣",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_3e1200big87i66856cd81b4il9c62_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:3,
          text:"裤子",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/191021_63a5459d4dlce1812a3b7fbi940c0_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:4,
          text:"裙子",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/191021_50egdgihl52bcglijgabbdhjcd5k2_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:5,
          text:"套装",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_80i19gl0i69ajj0kci9271b9f55f9_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:6,
          text:"女鞋",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_7540i50h60bbge255bk4cbjcafda7_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:7,
          text:"美妆个护",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/190908_5gabjle2l5ga1g4c211f6b7a8jglh_135x135.png_640x640.v1cAC.40.webp'
        },
        { 
          id:8,
          text:"包包",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_1elf51b3i1j664ea4ga4dc7kai57h_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:9,
          text:"配饰",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/190704_24a34ha3fe2hflh1i23b8ghgg21d2_150x150.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:10,
          text:"内衣",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_01eefe13a7fj2dkj7bl7i2ele3de2_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:11,
          text:"男友",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_883914gkdb4kdc1hg8a86acea5k8d_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:12,
          text:"家居",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_2f20ffj767lblfe04880a440clalh_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:13,
          text:"母婴",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_5hlij8b4hgfjh9ccfbj32h33j17eh_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:14,
          text:"食品",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_1flgca6a046h61db01h0dehfbag1c_135x135.jpg_640x640.v1cAC.40.webp'
        },
        { 
          id:15,
          text:"运动",
          ImgMessage:'https://s10.mogucdn.com/mlcdn/c45406/200327_89j4gef9kd87hd58d9511bee0f637_135x135.jpg_640x640.v1cAC.40.webp'
        }
        ],
        ProductListMessage:[
          {
            Href:'https://shop.mogu.com/detail/1mz8r3s?itemId=1mz8r3s&acm=3.mce.1_4_1mz8r3s.9750.37785-69894.oIz9gstjcRkeo.sd_115-swt_69-imt_6-c_2_11_604185668_0_0_3-lc_201-fcid_20003463-mid_9750-pit_24-pm_003-dit_-idx_0-dm1_5000&cparam=MTYxNzI1ODI2M18xMWtfODI4NzA4Njg5Yzc4MWE1YjIyYzgxYzA2N2M4MzllYjRfMTFfMF82MDQxODU2NjhfNGY4Zl8wXzBfMF84MTBfMV8zX2xvYy0w&ptp=31.GrPvGb.0.0.rxFZHYrX',
            ImgSrc:'https://s5.mogucdn.com/mlcdn/c45406/210326_15f5j8gdh3c4ba2j7dak73c7c8ef2_640x832.jpg_640x854.v1cAC.40.webp',
            Text:"港风花短袖衬衫女装夏季新款韩版设计感小众宽松别致上衣ins潮",
            Price:'￥49',
            Icon:"4"
          },
           {
            Href:'https://h5.mogu.com/detail-normal/index.html?itemId=1mz7ai2&acm=3.mce.1_4_1mz7ai2.9750.37785-69894.oIz9gstjcRkeo.sd_115-swt_69-imt_6-c_2_11_604047676_0_0_3-lc_201-fcid_20003463-mid_9750-pit_24-pm_003-dit_-idx_1-dm1_5000-mf_71971_1211981-idx_1-mfs_40&cparam=MTYxNzI1ODI2M18xMWtfODI4NzA4Njg5Yzc4MWE1YjIyYzgxYzA2N2M4MzllYjRfMTFfMF82MDQwNDc2NzZfNGY4Zl8wXzBfMF8yMjdfMV8zX2xvYy0w&ptp=32._mf1_1239_71971.0.0.qaxtDO5A',
            ImgSrc:'https://s5.mogucdn.com/mlcdn/c45406/210323_5cg79lde62fge5618hb03b2h9eg45_640x960.jpg_640x854.v1cAC.40.webp',
            Text:"网红春夏新款小个子长袖上衣薄款外套短款防晒针织衫开衫外套女",
            Price:'￥39.9',
            Icon:"5"
          },
           {
            Href:'https://h5.mogu.com/detail-normal/index.html?itemId=1mf1uea&acm=3.mce.1_4_1mf1uea.9750.37785-69894.oIz9gstjcRkeo.sd_115-swt_69-imt_6-c_2_11_490454379_0_0_3-lc_201-fcid_20003463-mid_9750-pit_24-pm_003-dit_-idx_2-dm1_5000&cparam=MTYxNzI1ODI2M18xMWtfODI4NzA4Njg5Yzc4MWE1YjIyYzgxYzA2N2M4MzllYjRfMTFfMF80OTA0NTQzNzlfNGY4Zl8wXzBfMF80NDdfMV8zX2xvYy0w',
            ImgSrc:'https://s5.mogucdn.com/mlcdn/c45406/190329_3eeh0lj66bl6hjggdeafbj1ffc7gj_640x960.jpg_640x854.v1cAC.40.webp',
            Text:"小清新露肩荷叶袖连衣裙时尚性感显瘦收腰吊带裙A字裙（送腰带）",
            Price:'￥85.5',
            Icon:"1.2w"
          },
           {
            Href:'https://h5.mogu.com/detail-normal/index.html?itemId=1myrkfk&acm=3.mce.1_4_1myrkfk.9750.37785-69894.oIz9gstjcRkeo.sd_115-swt_69-imt_6-c_2_11_602492257_0_0_3-lc_201-fcid_20003463-mid_9750-pit_24-pm_003-dit_-idx_3-dm1_5000&cparam=MTYxNzI1ODI2M18xMWtfODI4NzA4Njg5Yzc4MWE1YjIyYzgxYzA2N2M4MzllYjRfMTFfMF82MDI0OTIyNTdfNGY4ZF8wXzBfMF85NjlfMV8zX2xvYy0w',
            ImgSrc:'https://s5.mogucdn.com/mlcdn/c45406/210222_2885146l96l07kb3c6f3d79988igf_720x960.jpg_640x854.v1cAC.40.webp',
            Text:"女2021年新款春季薄款时尚百搭显高流行休闲束脚运动裤卫裤潮",
            Price:'￥49.9',
            Icon:"465"
          },
           {
            Href:'https://shop.mogu.com/detail/1mer2j0?itemId=1mer2j0&acm=3.mce.1_4_1mer2j0.9750.37785-69894.oIz9gstjcRkeo.sd_115-swt_69-imt_6-c_2_11_488205479_0_0_3-lc_201-fcid_20003463-mid_9750-pit_24-pm_003-dit_-idx_4-dm1_5000&cparam=MTYxNzI1ODI2M18xMWtfODI4NzA4Njg5Yzc4MWE1YjIyYzgxYzA2N2M4MzllYjRfMTFfMF80ODgyMDU0NzlfNGY4YV8wXzBfMF83MjdfMV8zX2xvYy0w&ptp=31.GrPvGb.0.0.cjsMAgDn',
            ImgSrc:'https://s5.mogucdn.com/mlcdn/c45406/190320_2g6j6af9f8k5g4cbiif7cg158ile3_640x853.jpg_640x854.v1cAC.40.webp',
            Text:"夏装2021新款V领花边灯笼袖洋气蕾丝衬衫女百搭超仙上衣小衫",
            Price:'￥39.9',
            Icon:"1.3w"
          },
           {
            Href:'https://h5.mogu.com/detail-normal/index.html?itemId=1mlsfe4&acm=3.mce.1_4_1mlsfe4.9750.37785-69894.oIz9gstjcRkeo.sd_115-swt_69-imt_6-c_2_11_533929769_0_0_3-lc_201-fcid_20003463-mid_9750-pit_24-pm_003-dit_-idx_5-dm1_5000&cparam=MTYxNzI1ODI2M18xMWtfODI4NzA4Njg5Yzc4MWE1YjIyYzgxYzA2N2M4MzllYjRfMTFfMF81MzM5Mjk3NjlfNGY4Zl8wXzBfMF84MTBfMV8zX2xvYy0w',
            ImgSrc:'https://s5.mogucdn.com/mlcdn/c45406/191011_1h572k00d37970e61gffl7fjb85ak_5000x7500.jpg_640x854.v1cAC.40.webp',
            Text:"春秋内搭新款韩版V领百搭打底衫长袖修身毛衣上衣潮套头针织衫女",
            Price:'￥39',
            Icon:"2252"
          }
        ]
      }
    },
    methods: {
      
    }
  }
</script>
<style scoped>

.RoundImg{
  width: 50px;
  height: 50px;
}
.TopList{
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 9px;
}
.TopList>div{
  width: 83px;
  height: 83px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.TopList>div>p{
  position: absolute;
  bottom: 5px;
  width: 100%;
  margin: 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  white-space: 1000;
}
.ProductListBox{
  padding: 0 5px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  margin-bottom: 60px;
}
.ProductBox{
  margin: 5px 0;
  width: 45vw;
  background-color: #fff;
}
.ProductBox>a>div{
  margin-top: 5px;
  padding: 5px;
}
.ProductBox>a>div>p{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin: 0;
  font-size: 10px;
  margin: 3px 0;
}
.ProductBox>a>div>p:nth-child(2){
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.ProductBox>a>div>p:nth-child(3){
  border-radius: 5px;
  background-color: rgb(255, 87, 119);
  color: #fff;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}
</style>