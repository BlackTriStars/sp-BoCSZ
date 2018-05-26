// pages/survey/surveyTest/surveyTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '2018届青年后备人才调研',
      info: {
        desc: '问卷简介：欢迎各位同事参加2018年青年后备人才问卷调研',
        time: '2018年5月3日',
        num: 20
      },
      status: false, // 调查状态 true 调研中 false 调研前
      current: 0, //  当前题目
      questionList: [{
        content: '您认为本单位对青年后备人才培养的重视程度？',
        options: [
          '很满意',
          '满意',
          '一般',
          '不满意'
        ],
        value: -1
      }]
  },
  pre() {
      if (this.data.status) {

      } else {
        this.setData({
          status: true
        });
      }
    },
    next() {
      if (this.data.status) {

      } else {
        wx.navigateTo({url:'/pages/survey/survey'})
      }
    },
    chooseAnswer(e) {
      let index = e.currentTarget.dataset.index;
      let attr = 'questionList['+ this.current+'].value';
      this.setData({
        [attr]: index
      })
    }
})