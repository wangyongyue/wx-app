
function Server (){
  this.url = function(){
    return ""
  }
  this.body = function(){
    return {}
  }
  this.error = ""
  this.datas = [];
  this.reloadData = function(response){

  }
  this.reloadError = function(error){
    
  }
  this.run = function(callBack){
    if (this.url().length == 0){
      this.reloadData(null)
      callBack()
      return;
    }
    wx.showLoading({
      title: '加载中',
     })
     
    wx.request({
      url : this.url,
      method: "POST",
      data: this.body(),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        wx.hideLoading()
        console.log(res.data);
        this.reloadData(null)
      callBack()
      },
      fail: function(error){
        wx.hideLoading()
        this.reloadError(error)
        callBack()
      }
    })

  }

  


}
exports.Server = Server;