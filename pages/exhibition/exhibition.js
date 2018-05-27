// pages/exhibition/exhibition.js
import config from '../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'scroller',
    list: [],
    data: [
      {
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
      },
      {
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
      }, {
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
      }, {
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
    imgSrc: config.imgSrc
  },
  onLoad(){
    this.setData({
      list: this.data.data
    })
  },
  //  滚动加载相关
  lower(){
    let list = this.data.list;
    let data = this.data.data;
    list.push(...data)
    this.setData({
      list
    })

  },
  // 提示框相关
  showToast(){
    wx.showToast({
      title: "toast",
      icon: "success",
    })
  },
  hideToast(){
    wx.hideToast()
  },
  showLoading(){
    wx.showLoading({
      title: '加载中',
    })
  },
  hideLoading(){
    wx.hideLoading()
  },
  showModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: "用户点击确定",
            icon: "success",
            duration: 2000
          })
        } else if (res.cancel) {
          wx.showToast({
            title: "用户点击取消",
            icon: "fail",
            duration: 2000            
          })
        }
      }
    })
  }
})