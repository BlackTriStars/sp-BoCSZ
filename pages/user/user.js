// pages/user/user.js
const app = getApp()
import config from '../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      detail: [{
          title: '已学课程:',
          value: 25
        },
        {
          title: '我的解封:',
          value: 36
        },
        {
          title: '我的排名',
          value: 12
        }

      ]
    },
    list: [
      {
      title: '我的收藏',
      name: 'collection',
      url: '/pages/user/collection/collection',
      img: '',
      num: 12
      }, {
        title: '我的学习',
        url: '/pages/myStudy/myStudy',
        name: 'myStudy',
        img: '',
        num: 109
      }, {
        title: '我的积分',
        name: 'integral',
        url:'/pages/user/integral/integral',
        img: '',
        num: 36
      }, {
        title: '我的问卷',
        name: 'survey',
        url: '/pages/survey/survey',
        img: '',
        num: 1
      }, {
        title: '培训中心介绍',
        name: 'introduce',
        url:'/pages/user/introduce/introduce',
        img: '',
        num: 0
      }
    ],
    imgSrc: config.imgSrc,
    user:{}
  },
  go(e){
    let url = e.currentTarget.dataset.url;
    console.log(url)
    wx.navigateTo({
      url:url
    })
  }
  
})