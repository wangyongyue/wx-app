
//获取应用实例
const app = getApp()
var order = ['work', 'like', 'new']
var index = 0;
Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    
  },
  //组件的内部数据，和 properties 一同用于组件的模版渲染
  data:{
    title: "从小就牛逼",
    content: "从小就牛逼厉害的不得了",
    ranking: "排名：100",
    attention: "关注：100",
    list: [],
    userInfo:{},
    toView:"green",
    scrollTop:0,
    marginLeft:0
   
  },
  attached: function () { 
    this.setData({
      list: [{title:"followed"},
             {title:"followed"}  
            ]
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }
  },
  
  
  //组件的方法，包括事件响应函数和任意的自定义方法 
  methods: {
    // 跳转活动详情  
    clickTap: function(e) {
      this.triggerEvent('clickTap', {
        'index': this.data.index
      })
    },
    onTouchend: function(e){
      console.log("end")
      // var a = document.createElement("div")
      // var b = document.getElementById("mine")
      // b.innerHTML = "sldjflsdkfjsldflks"
  
    },
    clickTapWork: function(){
      
      wx.showToast({
        title: '该功能未上线该功能未上线该功能未上线该功能未上线该功能未上线该功能未上线',
        icon: 'none',
        duration: 1500
      })
      
      this.setData({
        toView: "work",
        marginLeft: 0
      })
    },
    clickTapLike: function(){
      this.setData({
        toView: "like",
        marginLeft: wx.getSystemInfoSync().windowWidth /3
      })
    },
    clickTapNew: function(){
      this.setData({
        toView: "new",
        marginLeft: wx.getSystemInfoSync().windowWidth /3 * 2
      })
    },
    
  }
  
})