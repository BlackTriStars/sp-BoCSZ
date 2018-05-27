// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  login(e){
    let userName = e.detail.value.userName;
    let password = e.detail.value.password;
    wx.redirectTo({
      url:'/pages/index/index'
    })
    
  }
})