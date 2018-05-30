//index.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = false
innerAudioContext.src = 'http://ovhvevt35.bkt.clouddn.com/photo/%E5%A5%BD%E5%A6%B9%E5%A6%B9%E4%B9%90%E9%98%9F%20-%20%E4%B8%8D%E8%AF%B4%E5%86%8D%E8%A7%81.mp3'
// innerAudioContext.src = "http://www.daiwei.org/vue/music/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3"
// innerAudioContext.src = "http://www.daiwei.org/vue/music/%E8%AE%B8%E5%B5%A9%20-%20%E7%8E%AB%E7%91%B0%E8%8A%B1%E7%9A%84%E8%91%AC%E7%A4%BC.mp3"
// innerAudioContext.src = "http://www.daiwei.org/vue/music/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3"
// innerAudioContext.src = "http://www.daiwei.org/vue/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3"
// innerAudioContext.src = "http://www.daiwei.org/vue/music/%E8%AE%B8%E5%B5%A9%20-%20%E6%9C%80%E4%BD%B3%E6%AD%8C%E6%89%8B.mp3"
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
// innerAudioContext.stop()


Page({
  data: {
    is_modal_Hidden: true,
    is_modal_Msg: {},
    userinfoIndex: 0,
    itemList: [
      {
        name: '看书',
        id: 1,
        imgUrl: '../images/du.png',
        border: 1,
        color: '#FFC0CB',
        music: "http://ovhvevt35.bkt.clouddn.com/photo/%E5%A5%BD%E5%A6%B9%E5%A6%B9%E4%B9%90%E9%98%9F%20-%20%E4%B8%8D%E8%AF%B4%E5%86%8D%E8%A7%81.mp3",
        time: '25:00'
      },
      {
        name: '休息',
        id: 2,
        imgUrl: '../images/shen.png',
        border: 1,
        color: '#ff9900',
        music: "http://www.daiwei.org/vue/music/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3",
        time: '25:00'
      },
      {
        name: '发呆',
        id: 3,
        imgUrl: '../images/si.png',
        border: 2,
        color: '#66ccff',
        music: "http://www.daiwei.org/vue/music/%E8%AE%B8%E5%B5%A9%20-%20%E7%8E%AB%E7%91%B0%E8%8A%B1%E7%9A%84%E8%91%AC%E7%A4%BC.mp3",
        time: '25:00'
      }
    ],
    itemList1: [
      {
        name: '工作',
        id: 4,
        imgUrl: '../images/work.png',
        border: 1,
        color: '#33ff66',
        music: "http://www.daiwei.org/vue/music/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3",
        time: '25:00'
      },
      {
        name: '学习',
        id: 5,
        imgUrl: '../images/xie.png',
        border: 1,
        color: 'red',
        music: "http://www.daiwei.org/vue/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3",
        time: '25:00'
      },
      {
        name: '运动',
        id: 6,
        imgUrl: '../images/yu.png',
        border: 2,
        color: '#DA70D6',
        music: "http://www.daiwei.org/vue/music/%E8%AE%B8%E5%B5%A9%20-%20%E6%9C%80%E4%BD%B3%E6%AD%8C%E6%89%8B.mp3",
        time: '25:00'
      },
    ],
    userInfo: {},
    innerAudioIndex: 1, //判断音乐是否继续播放
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  myevent: function(e) {
    if (e.detail==1){
      innerAudioContext.stop()
    } else if (e.detail == 2){
      innerAudioContext.play()
    }else{
      innerAudioContext.pause()
    }
    
    
    console.log(e.detail)
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // 点击事件 选中当前的什么任务
  onTabsItemTap: function (event) {
    console.log(event.currentTarget.dataset.item)
    console.log(this.data)
      this.data.innerAudioIndex++
      this.setData({
        userinfoIndex: event.currentTarget.dataset.item.id
      })
      
  },
  primary: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  go: function() { // 去执行操作
    // if (timer){
    //   clearTimeout(timer)
    // }
    if (this.data.userinfoIndex!=0){
      this.setData({
        is_modal_Hidden: false
      })
      if (this.data.userinfoIndex>3){
        this.setData({
          is_modal_Msg: this.data.itemList1[this.data.userinfoIndex - 4]
        })
        innerAudioContext.src = this.data.itemList1[this.data.userinfoIndex - 4].music
      }else{
        this.setData({
          is_modal_Msg: this.data.itemList[this.data.userinfoIndex - 1]
        })
        innerAudioContext.src = this.data.itemList[this.data.userinfoIndex - 1].music
      }
      this.time.showDialog();
      
      innerAudioContext.play(() => {
        console.log('开始播放')
      })
      
    }
  },
  onLoad: function () {
    // innerAudioContext.play(()=>{
    //   console.log('开始播放');
    // });
    //获得time组件
    this.time = this.selectComponent("#time");
    innerAudioContext.onPlay(() => {
      console.log('录音播放中');
    })

    innerAudioContext.onStop(() => {
      console.log('录音播放停止');
    })

    innerAudioContext.onEnded(() => {
      console.log('录音播放结束');
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
