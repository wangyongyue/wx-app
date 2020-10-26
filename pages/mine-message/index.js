//index.js
//获取应用实例
const app = getApp()

var Test = require('../server/test').Test
Page({
  data: {
    datas:[],
  },
  //事件处理函数
  clickTap: function(e) {
    var index=e.detail['index'];
    console.log(index)
    wx.navigateTo({
      url: '../logs/logs'
    })
    
  },
  onLoad: function () {
    var test = new Test()
    test.run(() => {
      this.setData({
        datas: test.datas
      })
    })
  }
})
