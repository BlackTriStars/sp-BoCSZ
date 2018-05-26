// pages/material/material.js
import config from '../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "intro",
    jifen: 2,
    comments: [
      {
        avatar: "avatar",
        name: "微信名称",
        content:
        "近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人近日"
      },
      {
        avatar: "avatar",
        name: "微信名称",
        content:
        "近日，全国近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人近日"
      }
    ],
    number: {
      collect: "56",
      number: "56",
      like: "36",
      wechart: "16"
    },
    iszan: "false",
    iscollect: "false",
    imgSrc: config.imgSrc
  },
  toggleIntroType: function() {
    this.data.type = "intro";
  },
  toggleCommentsType: function(){
    this.data.type = 'comments';
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