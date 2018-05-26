// components/footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {
        content:'首页',
        icon: 'icon-home'
      },
      {
        content:'资料培训',
        icon: 'icon-data'
      },
      {
        content:'我的',
        icon: 'icon-user'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrentActive(e){
      let index = e.currentTarget.dataset.index;
      let url = e.currentTarget.dataset.url;
      switch (index) {
        case 0:
          url='/pages/index/index'
          break;
        case 1:
          url='/pages/materialIndex/materialIndex'
          break;
        case 2:
          url='/pages/user/user'
          break;
      }
      wx.redirectTo({
        url
      })
    }
  }
})
