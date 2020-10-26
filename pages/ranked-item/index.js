
//获取应用实例
Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    // 活动标题
    name: {
      type: String,
      value: "sdf"
    },
    title: {
      type: String,
      value: "sdf"

    },
    content: {
      type: String,
      value: "sdf"

    },
    index:{
      type: Number,
      value: 0

    }
  },
  //组件的内部数据，和 properties 一同用于组件的模版渲染
  data:{
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