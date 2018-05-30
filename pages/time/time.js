var timer
Component({
  properties: {
    modalHidden: {
      type: Boolean,
      value: true,
      linked: function (target) {
        console.log(999)//钩子函数，在组件linked时候被调用target是组件的实例，
      }
    }, //这里定义了modalHidden属性，属性值可以在组件使用时指定.写法为modal-hidden  
    modalMsg: {
      type: String,
      value: ' ',
      linked: function (target) {
        console.log(999)//钩子函数，在组件linked时候被调用target是组件的实例，
      }
    }
  },
  data: {
    // 这里是一些组件内部数据  
    minute: 24,
    second: 60,
    minute1: 24,
    second1: 60,
    music: true
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    console.log(111)
  },
  moved: function () { 
    console.log(222)
  },
  detached: function () { 
    console.log(333)
  },
  methods: {
    dataEdit: function () {
      console.log(1)
    },  
    // 这里放置自定义方法  
    modal_click_Hidden: function () {
      this.setData({
        modalHidden: true,
      })
      clearInterval(timer)
      this.triggerEvent('myevent', 1)
      
    },
    musicClick: function () {
      console.log(222222)
      console.log(!this.data.music)
      this.setData({
        music: !this.data.music,
      })
      if (this.data.music){
        this.triggerEvent('myevent', 2)
      }else{
        this.triggerEvent('myevent', 3)
      }
    },
    showDialog: function () {
      let that = this
      that.setData({
        second1: 60,
        minute1: 24
      })
      that.loopShowDialog()
    },
    loopShowDialog: function(index) {
      if (index){
        clearInterval(timer)
      }else{
        var that = this
        that.data.second = 60
        timer = setInterval(function () {
          --that.data.second
          if (that.data.second<10){
            that.data.second1 = '0' + that.data.second
          }else{
            that.data.second1 = that.data.second
          }
          that.setData({
            second1: that.data.second1
          })
          if (that.data.second == 0) {
            if (that.data.minute==0){
              clearInterval(timer)
              wx.showToast({
                title: '目标已完成',
                icon: 'success',
                duration: 2000
              })  
            }else{
              --that.data.minute
              if (that.data.minute < 10) {
                that.data.minute1 = '0' + that.data.minute
              }else{
                that.data.minute1 = that.data.minute
              }
              that.setData({
                minute1: that.data.minute1
              })
            }
            that.data.second = 60
          }
        }, 1000);
      }
    }
  },
  _myPrivateMethod: function () {
    console.log(4444)
  },
  _propertyChange: function (newVal, oldVal) {
    console.log(5555)
  }
})  