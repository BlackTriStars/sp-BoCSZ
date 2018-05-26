// pages/user/collection/collection.js
import config from '../../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        img: '/assets/user/collection-0.png',
        title: '企业文化',
        content: '近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....',
        select: false,
        data: [{
          value: 56,
          name: 'users'
        }, {
          value: 36,
          name: 'like'
        }, {
          value: 16,
          name: 'wechat'
        }]
      }, {
        img: '/assets/user/collection-1.png',
        title: '规则制度',
        content: '近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....',
        select: false,
        data: [{
          value: 56,
          name: 'users'
        }, {
          value: 36,
          name: 'like'
        }, {
          value: 16,
          name: 'wechat'
        }]
      }, {
        img: '/assets/user/collection-2.png',
        title: '法律法规',
        content: '近日，全国首场外汇市场准则培训在北京中国银行总行举办。中国银行副行长任德奇，外管局国际收支司司长.....',
        select: false,
        data: [{
          value: 56,
          name: 'users'
        }, {
          value: 36,
          name: 'like'
        }, {
          value: 16,
          name: 'wechat'
        }]
      }, 
    ],
    canEdit: false,
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
  changeEditStatus(){
    this.setData({
      canEdit: !this.data.canEdit
    })
  },
  select(e){
    let index = e.currentTarget.dataset.index;
    let attr = 'list[' + index + ']' + '.select';
    this.setData({
      [attr]: !this.data.list[index].select
    })
  },
  del() {
    let list = this.data.list.filter(v => !v.select);
    this.setData({
      canEdit: false,
      list
    })
  }
})