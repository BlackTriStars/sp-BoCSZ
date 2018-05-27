// pages/dynamic/dynamic.js
import config from '../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperOption: {
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true,
      autoPlay: true
    },
    list: [{
      img: "/assets/user/collection-0.png",
      title: "企业文化",
      content: "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
      data: [{
        value: 56,
        name: "users"
      },
      {
        value: 36,
        name: "like"
      },
      {
        value: 16,
        name: "wechat"
      }
      ]
    },
    {
      img: "/assets/user/collection-1.png",
      title: "规则制度",
      content: "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
      data: [{
        value: 56,
        name: "num"
      },
      {
        value: 36,
        name: "like"
      },
      {
        value: 16,
        name: "wechat"
      }
      ]
    },
    {
      img: "/assets/user/collection-2.png",
      title: "法律法规",
      content: "近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....",
      data: [{
        value: 56,
        name: "num"
      },
      {
        value: 36,
        name: "like"
      },
      {
        value: 16,
        name: "wechat"
      }
      ]
    }
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(255,255,255,.8)',
    indicatorActiveColor: '#71d382',
    imgSrc: config.imgSrc
  },
  go() {
    wx.navigateTo({
      url: '/pages/history/historyDetail/historyDetail'
    })
  }
})