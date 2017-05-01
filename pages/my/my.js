//index.js
//获取应用实例
var app = getApp() // getApp 就是 根目录的 app.js
Page({
  data: {
    motto: '开始制作小程序', // 座右铭
    userInfo: {}
  },

  //事件处理函数
  bindViewTap: function() { // 点击处理句柄
    wx.navigateTo({ // 这个就是 路由
      url: '../logs/logs' 
    })
  },
  onLoad: function () { // 启动后处理句柄
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
