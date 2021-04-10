<template>
    <div>
        <div id="LeftTebWarp">
            <ul class="Left">
                <li :class="index==i? 'active':''"  @click="chekLi(i)" v-for="(item,i) in LeftArr" :key="i"><p class="left_item_teb" :class="index==i? 'redIco':''"> {{item.txt}}</p></li>
            </ul>
            <div class="RightBox">
                <!-- 商品分类容器 -->
                <div>
                    <div class="product" v-for="(item,i) in ProductArr[index].teb" :key="i">
                        <img :src="item.ImgSrc" alt="" width="65">
                        <p>{{item.Name}}</p>
                    </div>
                </div>
                
            <!-- 图墙容器 -->
                <div class="CubeWellWarp">
                    <div class="CubeTebs">
                        <div :class="tebInx==i?'FontCplor':''" @click="teggltTeb(i)" v-for="(item,i) in ImgProductTeb" :key="i">
                            <p>{{item.txt}}</p>
                        </div>
                    </div>
                    <div class="CubeWell">
                        <div class="CubeWellProduct" v-for="(item,i) in tebArr[index].ProductTeb[tebInx].product" :key="i">
                            <div class="CubeImgBox">
                                <img :src="item.img" alt="" width="100%">
                                <p class="CubeBo">已售 {{item.number}} 件</p>
                            </div>
                            <p class="CubeWellProductTxt">{{item.txt}}</p>
                            <p class="CubeWellProductBottom">
                                <span class="CubePrice">{{item.price}}</span>
                                <span class="CubeStar"> {{item.star}} <i class="el-icon-star-off"></i></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return{
            LeftArr:[
                {  txt:'正在流行'  },
                {  txt:'上衣'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  },
                {  txt:'裤子'  }
            ],
            ProductArr: [
                {
                            teb:[
                                {
                                    ImgSrc:'https://s11.mogucdn.com/mlcdn/c45406/181220_8dbei1a33jj57e6le9lk7ce28ggg7_120x120.jpg_999x999.v1c0.81.webp',
                                    Name:'裙子套装'
                                },
                                {
                                    ImgSrc:'https://s17.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_999x999.v1c0.81.webp',
                                    Name:'短袖'
                                },
                                {
                                    ImgSrc:'https://s18.mogucdn.com/mlcdn/c45406/190611_80i70h1212l87e7d0dhf29kl9cb4b_130x130.png_999x999.v1c0.81.webp',
                                    Name:'连衣裙'
                                },
                                {
                                    ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/200309_3jdglj331810il07iakbb3a7jh1ai_180x180.jpg_200x9999.v1c7E.81.webp',
                                    Name:'时尚套装'
                                },
                                {
                                    ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/200309_7dfgi03507310a8li2agj82ddcdl3_180x180.jpg_200x9999.v1c7E.81.webp',
                                    Name:'半身裙'
                                },
                                {
                                    ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/190611_6lbh90cghfk2h001i0efh8j77d655_130x130.png_999x999.v1c0.81.webp',
                                    Name:'防晒衣'
                                },
                                {
                                    ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/190611_4c5c014714haibd02bjgjkadfg3je_130x130.png_999x999.v1c0.81.webp',
                                    Name:'背心'
                                },
                                {
                                    ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/190611_7b6785hk6bfi8lf1g43k8093i43l1_130x130.png_999x999.v1c0.81.webp',
                                    Name:'短裤'
                                }

                            ] 
                },
                {  
                    teb:[
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_1l2hff1000d3feja5dkb6bajg79h8_120x120.png_999x999.v1c0.81.webp',
                                Name:'热销爆款'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_0aa709h9806b38101l7l86k567e5e_120x120.png_999x999.v1c0.81.webp',
                                Name:'T恤'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_14geh183k518di1llc1l1febkade3_120x120.png_999x999.v1c0.81.webp',
                                Name:'针织衫'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_2hcc6019i9h2g270f4a400g0e2gj8_120x120.png_999x999.v1c0.81.webp',
                                Name:'衬衫'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_0gk1280g139gc4c4832lhf15ib42f_120x120.png_999x999.v1c0.81.webp',
                                Name:'雪纺衫'
                            },
                            {
                                ImgSrc:'https://s11.mogucdn.com/mlcdn/c45406/210205_161jj8f2203jedddbf5de92clje2j_120x120.png_999x999.v1c0.81.webp',
                                Name:'打底背心'
                            },
                            {
                                ImgSrc:'https://s17.mogucdn.com/mlcdn/c45406/210205_1346bkah9le7ij9lif2156ajei75i_120x120.png_999x999.v1c0.81.webp',
                                Name:'卫衣'
                            },
                            {
                                ImgSrc:'https://s18.mogucdn.com/mlcdn/c45406/210205_1697cb072gbckii7dd7hcg1j7e15f_120x120.png_999x999.v1c0.81.webp',
                                Name:'西装外套'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_1l33i3h0fd8g8lbk5bi950dfa82c5_120x120.png_999x999.v1c0.81.webp',
                                Name:'牛仔外套'
                            },
                            {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210205_2ggajeldi5c0hhd4lb81f2c09bkhd_120x120.png_999x999.v1c0.81.webp',
                                Name:'其他外套'
                            }
                      ] 
                
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }]
                 },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }] 
                },
                {  teb:[ {
                                ImgSrc:'https://s2.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
                                Name:'9.9秒杀'
                            }]
                }
            ],
            ImgProductTeb:[ { txt:'综合'},
                            { txt:'销量'},
                            { txt:'新品'}
            ],
            tebArr:[{
                ProductTeb:[
                    {
                        product:[
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/200909_525e62hi0ejc6ljc56djf89hhjhh5_750x1000.jpg_280x374.v1cAC.40.webp',
                                number:91,
                                txt:'花西子玉容养肤持妆粉底液/遮瑕保湿持久轻薄哑雾混干皮油皮亲妈',
                                price:'￥229',
                                star:335
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/17f85e/200820_8agca5gc48ibb5iec3ccfl0c0fhfk_640x960.jpg_280x374.v1cAC.40.webp',
                                number:151,
                                txt:'花西子玉容三花遮瑕盘/遮瑕膏盘脸部遮盖黑眼圈斑点痘印痘痘雀斑',
                                price:'￥139',
                                star:603
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/776a41/210408_82dba9h48ac9df817820fli8h1g6j_750x1125.png_280x374.v1cAC.40.webp',
                                number:528,
                                txt:'依莱丽倾慕滋润口红不掉色不沾杯滋润保湿持久学生款变色唇膏',
                                price:'￥8.8',
                                star:3495
                            },
                            {
                                img:'https://s11.mogucdn.com/mlcdn/776a41/210408_74db775eac9072bg64bbcec1gj9jd_750x1125.png_280x374.v1cAC.40.webp',
                                number:1347,
                                txt:'花西子玉容养肤持妆粉底液/遮瑕保湿持久轻薄哑雾混干皮油皮亲妈',
                                price:'￥10.9',
                                star:5230
                            }
                        ]
                    },
                    {
                        product:[
                           {
                               img:'https://s2.mogucdn.com/mlcdn/c45406/200909_525e62hi0ejc6ljc56djf89hhjhh5_750x1000.jpg_280x374.v1cAC.40.webp',
                                number:91,
                                txt:'花西子玉容养肤持妆粉底液/遮瑕保湿持久轻薄哑雾混干皮油皮亲妈',
                                price:'￥229',
                                star:335
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/17f85e/200820_8agca5gc48ibb5iec3ccfl0c0fhfk_640x960.jpg_280x374.v1cAC.40.webp',
                                number:151,
                                txt:'花西子玉容三花遮瑕盘/遮瑕膏盘脸部遮盖黑眼圈斑点痘印痘痘雀斑',
                                price:'￥139',
                                star:603
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/200423_501d89f6c2jd71ce8jh98lgggi068_640x850.jpg_280x374.v1cAC.40.webp',
                                number:5,
                                txt:'敬修堂佰花方净白补水祛斑霜产品',
                                price:'￥999',
                                star:241
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/210220_8f96da8gjl37ja0j4dk0809hh87l5_800x800.jpg_280x374.v1cAC.40.webp',
                                number:5989,
                                txt:'花西子玉容养肤持妆粉底液/遮瑕保湿持久轻薄哑雾混干皮油皮亲妈',
                                price:'￥99',
                                star:564
                            }
                        ]
                    },
                    {
                        product:[
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/200909_525e62hi0ejc6ljc56djf89hhjhh5_750x1000.jpg_280x374.v1cAC.40.webp',
                                number:91,
                                txt:'花西子玉容养肤持妆粉底液/遮瑕保湿持久轻薄哑雾混干皮油皮亲妈',
                                price:'￥229',
                                star:335
                            },
                            {
                               img:'https://s2.mogucdn.com/mlcdn/17f85e/200820_8agca5gc48ibb5iec3ccfl0c0fhfk_640x960.jpg_280x374.v1cAC.40.webp',
                                number:151,
                                txt:'花西子玉容三花遮瑕盘/遮瑕膏盘脸部遮盖黑眼圈斑点痘印痘痘雀斑',
                                price:'￥139',
                                star:603
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/210409_05kghgj62e1239374ckij6fe1d8kg_640x960.jpg_280x374.v1cAC.40.webp',
                                number:0,
                                txt:'花西子玉容养肤持妆粉底液/遮瑕保湿持久轻薄哑雾混干皮油皮亲妈',
                                price:'￥112.86',
                                star:0
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/210409_37i20cf2f4f2150628k523lg79jc5_800x800.jpg_280x374.v1cAC.40.webp',
                                number:0,
                                txt:'【新】人本夏季透气老爹鞋休闲鞋百搭女2021运动鞋10299',
                                price:'￥219',
                                star:0
                            }
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                           {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/180310_53025e28jl8bk450201g012h6l563_640x960.jpg_280x374.v1cAC.40.webp',
                                number:227,
                                txt:'5双装袜子女短袜夏季超薄船袜纯棉低帮糖果色棉袜韩国可爱学生纯色女袜',
                                price:'￥16.8',
                                star:1781
                            },
                            {
                               img:'https://s2.mogucdn.com/mlcdn/c45406/210301_55e0ek5fa7f4hae5dg3k4ek977kh5_640x800.jpg_280x374.v1cAC.40.webp',
                                number:528,
                                txt:'张小喵灰色运动裤超透气女裤2021年春秋季宽松束腿休闲束脚裤',
                                price:'￥69.9',
                                star:1169
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/200421_3g2a734ke128ief2l7ec0018ibded_4501x5999.jpg_280x374.v1cAC.40.webp',
                                number:99,
                                txt:'2件50黑色吊带背心夏内搭宽松打底衫性感无袖雪纺短款上衣外穿',
                                price:'￥29.9',
                                star:995
                            },
                            {
                                img:'https://s11.mogucdn.com/mlcdn/c45406/200828_7f0akca9815el3hh1317f91k3e8gd_4666x6999.jpg_280x374.v1cAC.40.webp',
                                number:554,
                                txt:'春季新款胖妹妹遮肉显瘦马甲短款纽扣针织背心针织衫套头毛衣小衫',
                                price:'￥38',
                                star:822
                            }
                        ]
                    },
                    {
                        product:[
                           {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/180310_53025e28jl8bk450201g012h6l563_640x960.jpg_280x374.v1cAC.40.webp',
                                number:227,
                                txt:'5双装袜子女短袜夏季超薄船袜纯棉低帮糖果色棉袜韩国可爱学生纯色女袜',
                                price:'￥16.8',
                                star:1781
                            },
                            {
                               img:'https://s2.mogucdn.com/mlcdn/c45406/210301_55e0ek5fa7f4hae5dg3k4ek977kh5_640x800.jpg_280x374.v1cAC.40.webp',
                                number:528,
                                txt:'张小喵灰色运动裤超透气女裤2021年春秋季宽松束腿休闲束脚裤',
                                price:'￥69.9',
                                star:1169
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/200421_3g2a734ke128ief2l7ec0018ibded_4501x5999.jpg_280x374.v1cAC.40.webp',
                                number:99,
                                txt:'2件50黑色吊带背心夏内搭宽松打底衫性感无袖雪纺短款上衣外穿',
                                price:'￥29.9',
                                star:995
                            },
                            {
                                img:'https://s11.mogucdn.com/mlcdn/c45406/200828_7f0akca9815el3hh1317f91k3e8gd_4666x6999.jpg_280x374.v1cAC.40.webp',
                                number:554,
                                txt:'春季新款胖妹妹遮肉显瘦马甲短款纽扣针织背心针织衫套头毛衣小衫',
                                price:'￥38',
                                star:822
                            }
                        ]
                    },
                    {
                        product:[
                          {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/180310_53025e28jl8bk450201g012h6l563_640x960.jpg_280x374.v1cAC.40.webp',
                                number:227,
                                txt:'5双装袜子女短袜夏季超薄船袜纯棉低帮糖果色棉袜韩国可爱学生纯色女袜',
                                price:'￥16.8',
                                star:1781
                            },
                            {
                               img:'https://s2.mogucdn.com/mlcdn/c45406/210301_55e0ek5fa7f4hae5dg3k4ek977kh5_640x800.jpg_280x374.v1cAC.40.webp',
                                number:528,
                                txt:'张小喵灰色运动裤超透气女裤2021年春秋季宽松束腿休闲束脚裤',
                                price:'￥69.9',
                                star:1169
                            },
                            {
                                img:'https://s2.mogucdn.com/mlcdn/c45406/200421_3g2a734ke128ief2l7ec0018ibded_4501x5999.jpg_280x374.v1cAC.40.webp',
                                number:99,
                                txt:'2件50黑色吊带背心夏内搭宽松打底衫性感无袖雪纺短款上衣外穿',
                                price:'￥29.9',
                                star:995
                            },
                            {
                                img:'https://s11.mogucdn.com/mlcdn/c45406/200828_7f0akca9815el3hh1317f91k3e8gd_4666x6999.jpg_280x374.v1cAC.40.webp',
                                number:554,
                                txt:'春季新款胖妹妹遮肉显瘦马甲短款纽扣针织背心针织衫套头毛衣小衫',
                                price:'￥38',
                                star:822
                            }
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }, {
                ProductTeb:[
                    {
                        product:[
                            {txt:'111'}
                        ]
                    },
                    {
                        product:[
                            {txt:'222'}
                        ]
                    },
                    {
                        product:[
                             {txt:'333'}
                        ]
                    }
                ]
            }
                
            ],

            tebInx:0,
            index:0
            
        }
    },
    methods:{
        chekLi(i){
            this.index = i;
        },
        teggltTeb(i){
            this.tebInx = i;
            console.log(this.tebArr[this.index].ProductTeb[this.tebInx].product);
        }
    }
}
</script>
<style scoped>
#LeftTebWarp{
    display: flex;

}
.Left{
    margin: 0;
    padding-inline: 0;
    margin-inline: 0;
    list-style: none;
}
.Left>li{
    width: 100px;
    height: 45px;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
    white-space: 1000;
    display: flex;
    align-items: center;
    align-content: center;
}
.active{
    background-color: rgb(255, 255, 255);
    color: #FF5777;
}
.RightBox{
    padding-top: 20px;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
}
.RightBox>div:nth-child(1){
    margin: 0 auto;
    display: flex;
    width: 95%;
    height: 100%;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
}
.product{
    width: 32%;
}
.left_item_teb{
    width: 100%;
    text-align: center;
}
.redIco{
    width: 100%;
    height: 15px;
    border-left: 3px solid red;
    margin: 0;
    line-height: 15px;
}
.CubeWellWarp{
    background-color: rgb(255, 255, 255);
}
.CubeTebs{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #e6e6e6;
}
.CubeTebs>div{
    width: 33%;
}
.CubeTebs>div>p{
    height: 15px;
    line-height: 15px;
    border-left: 1px solid #e6e6e6;
}
.FontCplor{
    color: red;
}
.CubeWell{
    display: flex;
    flex-wrap: wrap;
}
.CubeWellProduct{
    width: 47%;
    height: 230px;
    margin: 2% 0 0 2%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    overflow: hidden;
}
.CubeWellProductTxt{
    margin: 8px 0 0 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 12px;
}
.CubeWellProductBottom{
    margin: 8px 0 0 0;
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
}
.CubePrice{
    color:#FF5777 ;
    font-weight: 700;
}
.CubeStar{
    color: 999;
    font-size: 12px;
}
.CubeImgBox{
    position: relative;
    height: 178.89px;
    background-color: #E5E5E5;
}
.CubeBo{
    margin: 0;
    position: absolute;
    padding: 3px 9px 3px 9px;
    left: 0;
    bottom: 5px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    background: -webkit-linear-gradient(left, rgba(14, 13, 13, 0.6)0%,  rgb(255,249,249,0.1)98%);/* Safari、Chrome */
    background: -o-linear-gradient(right, rgba(14, 13, 13,0.6)0%,  rgb( 255,249,249,0.1)98%);/* Opera */
    background: -moz-linear-gradient(right, rgba(14, 13, 13,0.6)0%,  rgb( 255,249,249,0.1)98%);/* Firefox */
    background: linear-gradient(to right, rgba(14, 13, 13,0.6)0%,  rgb( 255,249,249,0.1)98%); /* 标准的语法（必须放在最后） */
}
</style>