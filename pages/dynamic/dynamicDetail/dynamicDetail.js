// pages/dynamic/dynamicDetail/dynamicDetail.js
import config from '../../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res: {
      title: "中国银行举办全国首场外汇市场准则培训",
      img: "/assets/dynamic/img-0.png",
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
      ],
      article: [
        `近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长王春英以及人民银行货币政策司、全国外汇自律机制秘书处、中国外汇市场指导委员会等监管、自律机构代表出席开班仪式。`,
        `外汇市场准则是外汇市场自律的最新基础性制度，包括2017年5月发布的《全球外汇市场准则》和《中国外汇市场准则》，准则的制定发布是我国健全金融监管体系的重要举措，也是促进人民币国际化，和外部市场互通互认的重要规则。准则通过市场自律的方式进行自我规范，形成他律和自律的合力，有助于进一步提高我国人民币汇率形成机制的市场化程度、促进和规范外汇市场的发展，也是我国外汇市场规则与国际接轨的重要标志。`,
        `培训、研究引入同业监督和外部评估等措施持续推动准则的落实，打造平等竞争平台，避免劣币驱逐良币；三是监管机构将继续指导自律机制做好各项工作，并结合资本项目开放、汇率市场化改革、人民币国际化带来的机遇，继续推动外汇市场深化发展。`
      ],
      comments: [{
          avatar: "/assets/material/avatar.png",
          name: "微信名称",
          comment: "监管机构将继续指导自律机制做好各项工作，并结合资本项目开放、汇率市场化改革、人民币国际化带来的机遇，继续推动外汇市场深化发展。"
        },
        {
          avatar: "/assets/material/avatar.png",
          name: "微信名称",
          comment: "监管机构将继续指导自律机制做好各项工作，并结合资本项目开放、汇率市场化改革、人民币国际化带来的机遇，继续推动外汇市场深化发展。"
        }
      ]
    },
    commentTxt: "",
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