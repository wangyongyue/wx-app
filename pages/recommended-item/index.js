
//获取应用实例
Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    // 活动标题
    title: {
      type: String,
      value: "我是Title"
    },
    index:{
      type: Number,
      value: 0
    },
    contentA:{
      type: String,
    },
    contentB:{
      type: String,
    },
    contentC:{
      type: String,
    },
    contentD:{
      type: String,
    }
  },
  //组件的内部数据，和 properties 一同用于组件的模版渲染
  data:{
    buttons:["提示","解答","喜欢"]
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