// app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.login({
      success(res){
        if(res.code) {
          wx.request({
            url: 'http://localhost:8081/user/getUser',
            data: {
              code: res.code
            }
          })

          // 验证code值有效性
          if (res.code != null) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx621d64b70a84c43b&secret=3c3d62c48442f3d33c5a18830a5ac004&js_code='+res.code+'&grant_type=authorization_code',
            })
          }
        }
      }
    }),
    wx.getSetting({
      success(res) {
        // 获取用户信息
        if(res.authSetting['scope.userInfo']){
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success(res){
              wx.setStorage({
                key:"userInfo",
                data: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: {
    userInfo: null
  }
})

// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//         if(res.code) {
//           wx.request({
//             url: 'http://localhost:8081/user/getUser',
//             data: {
//               code: res.code
//             }
//           })

//           // 获取登陆凭证
//           if(res.code != null) {
//             wx.request({
//               url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx621d64b70a84c43b&secret=3c3d62c48442f3d33c5a18830a5ac004&js_code='+res.code+'&grant_type=authorization_code',
//               success(res){
//                 console.log(res.data)
//               }
//             })
//           }
//         }
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         console.log(res.authSetting)
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// })