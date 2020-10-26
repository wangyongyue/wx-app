var Server = require('../server/server').Server

function Test (){
  this.reloadData = function(response){
    this.datas = [
      {component:"test-item",index:0,title:"test"},
      {component:"test-item",index:1,title:"test"},
      {component:"test-item",index:2,title:"test"},
      {component:"test-item",index:3,title:"test"},
      {component:"test-item",index:4,title:"test"},
      {component:"test-item",index:5,title:"test"},
      {component:"test-item",index:6,title:"test"}]
      console.log(this.datas)
  }
}
Test.prototype = new Server();
exports.Test = Test;
module.exports.Test = Test;