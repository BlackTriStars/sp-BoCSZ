import config from '../../config/constant.js'
Page({
  data: {
    navList: [
      {
        content: '我的学习',
        img: 'nav-study',
        name: 'myStudy',
        url: '/pages/myStudy/myStudy'
      },
      {
        content: '实用工具',
        img: 'nav-tools',
        name: 'tools',
        url: '/pages/tools/tools'
      },
      {
        content: '培训计划',
        img: 'nav-plan',
        name: 'trainPlan',
        url: '/pages/trainPlan/trainPlan'
      },
      {
        content: '问卷调查',
        img: 'nav-research',
        name: 'survey',
        url: '/pages/survey/survey'
      }
    ],
    mainList: [
      {
        topLine: {
          img: 'title-new',
          title: '最新课程',
          color: '#0c6acc'
        },
        moreUrl: '/pages/latestLesson/latestLesson',
        main: [
          {
            img: 'index-img1',
            content: '理财新法规',
            name: 'material',
            url: '/pages/material'
          }, {
            img: 'index-img1',
            content: '理财新法规',
            name: 'material',
            url: '/pages/material'            
          },
        ],
        name: 'latestLesson'
      },
      {
        topLine: {
          img: 'title-hot',
          title: '热门推荐',
          color: '#f0324a'
        },
        moreUrl: '/pages/recommended/recommended',
        main: [
          {
            img: 'index-img2',
            content: '企业文化',
            name: 'material',
            url: '/pages/material'            
          }, {
            img: 'index-img3',
            content: '开发新客户',
            name: 'material',
            url: '/pages/material'            
          },
        ],
        name: 'recommended'
      },
      {
        topLine: {
          img: 'title-information',
          title: '培训动态',
          color: '#09c6bb'
        },
        moreUrl: '/pages/dynamic/dynamic',
        main: [
          {
            img: 'index-img4',
            content: '提升团队凝聚力培训',
            name: 'dynamicList',
            url: '/pages/dynamic/dynamicDetail/dynamicDetail'
          }, {
            img: 'index-img5',
            content: '销售培训',
            name: 'dynamicList',
            url: '/pages/dynamic/dynamicDetail/dynamicDetail'
          },
        ],
        name: 'dynamic'
      },
      {
        topLine: {
          img: 'title-history',
          title: '往期回顾',
          color: '#ff5025'
        },
        moreUrl: '/pages/history/history',
        main: [
          {
            img: 'index-img6',
            content: '提升团队凝聚力培训',
            name: 'historyList',
            url: '/pages/history/historyDetail/historyDetail'
          }, {
            img: 'index-img7',
            content: '销售培训',
            name: 'historyList',
            url: '/pages/history/historyDetail/historyDetail'
          },
        ],
        name: 'history'
      },
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(255,255,255,.8)',
    indicatorActiveColor: '#91d9ff',
    imgSrc: config.imgSrc
  },
  onLoad: function () {

  },
  go(e){
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({url})
  }
})
