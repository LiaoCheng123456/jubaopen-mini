//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */

  data: {
    // 搜索框信息
    placeholderContent:"男士休闲鞋",

    // 热搜
    hotSearch:[
      "精品女装", "休闲服饰", "鞋子", "裤子", "袜子", "外套", "T恤", "休闲服饰", "鞋子", "裤子", "袜子", "外套", "T恤"
    ],

    // banner图片
    bannerImage:[
      "../../images/banner/banner01.jpg",
      "../../images/banner/banner02.jpg",
      "../../images/banner/banner03.jpg",
      "../../images/banner/banner04.jpg",
    ],

    // 导航图片加标题
    navImage:[
      {
        id:"1",
        name:"新品上架",
        image:"../../images/icon/t_新品上架.png"
      },
      {
        id: "2",
        name: "今日爆款",
        image: "../../images/icon/t_今日爆款.png"
      },
      {
        id: "3",
        name: "9.9包邮",
        image: "../../images/icon/t_9块9包邮.png"
      },
      {
        id: "4",
        name: "折扣清仓",
        image: "../../images/icon/t_折扣清仓.png"
      },
      {
        id: "5",
        name: "厂家直销",
        image: "../../images/icon/t_厂家直销.png"
      },
      {
        id: "6",
        name: "美食推荐",
        image: "../../images/icon/t_美食推荐.png"
      },
      {
        id: "7",
        name: "拍卖",
        image: "../../images/icon/t_拍卖.png"
      },
      {
        id: "8",
        name: "充值中心",
        image: "../../images/icon/t_充值中心.png"
      }
    ],

    // 首页推荐分类信息
    recommendCategory:[
      {
        id: "1",
        title: "全部",
        desciption: "猜你喜欢"
      },
      {
        id: "2",
        title: "家具",
        desciption: "疯狂采购"
      },
      {
        id: "3",
        title: "便宜",
        desciption: "低价抢购"
      },
      {
        id: "4",
        title: "时尚",
        desciption: "时尚好货"
      },
      {
        id: "5",
        title: "母婴",
        desciption: "母婴好货"
      },
      {
        id: "6",
        title: "服装",
        desciption: "服装好货"
      },
      {
        id: "7",
        title: "鞋子",
        desciption: "鞋子好货"
      }
    ],
    recommendIndex:0
  },

  // 推荐分类被点击时触发
  navActiveClick: function(e) {
    this.setData({
      recommendIndex: e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})