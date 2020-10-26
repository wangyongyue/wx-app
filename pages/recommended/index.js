
//获取应用实例
Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    
  },
  //组件的内部数据，和 properties 一同用于组件的模版渲染
  data:{
    title: "sdsdfsd",
    datas: []
  },
  attached: function () { 
    this.setData({
      datas: [{component:"recommended-item",index:0,title:"sdsdf",contentA:"A  yisdfdsf",contentB:"A  yisdfdsf",contentC:"A  yisdfdsf",contentD:"A  yisdfdsf"},
      {component:"recommended-item",index:1,title:"sdsdf",contentA:"A  yisdfdsf",contentB:"A  yisdfdsf",contentC:"A  yisdfdsf",contentD:"A  yisdfdsf"},
      ]
    })
  },
  //组件的方法，包括事件响应函数和任意的自定义方法 
  methods: {
    // 跳转活动详情  
    clickTap: function(e) {
      this.triggerEvent('clickTap', {
        'index': this.data.index
      })
    }
  }
  
})