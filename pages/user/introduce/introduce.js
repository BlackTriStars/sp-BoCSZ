// pages/user/introduce/introduce.js
import config from '../../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    part: 1,
    firstFloor: [
      '各课室分布情况',
      '阶梯课室全景',
      '一楼培训中心大堂',
      '一楼过道',
      '一楼休息厅',
      '阶梯课室休息厅',
      '102教室',
    ],
    secondFloor: [
      '二楼大堂',
      '二楼休息厅',
      '二楼过道',
      '201课室全景',
      '202课室全景',
      '203会议室',
      '204会议室全景',
      '206课室全景',
      '学员健身室',
      '学员阅览室'
    ],
    showlist1: [],
    showlist2: [],
    title: '',
    album: false,
    imgSrc: config.imgSrc
  },
  onLoad(){
    let arr1 = [];
    let arr2 = [];
    this.data.firstFloor.forEach((v,i)=>{
      arr1.push({ area: v, location: (814 + parseInt((i) / 2) * 154) / 28.5})
    })
    this.data.secondFloor.forEach((v,i)=>{
      arr2.push({ area: v, location: (814 + 984 + parseInt((i)/2)*154)/28.5 })
    })
    this.setData({
      showlist1: arr1,
      showlist2: arr2
    })
  },
  showAlbum(e){
    let index = e.currentTarget.dataset.index;
    let type = e.currentTarget.dataset.type;
    this.setData({
      title: this.data[type][index],
      album: true
    })
  },
  close(){
    this.setData({
      album: false
    })
  }
})