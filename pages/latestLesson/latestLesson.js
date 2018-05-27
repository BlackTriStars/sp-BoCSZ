// pages/recommended/recommended.js
import config from '../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})