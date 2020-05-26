// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['http://img2.imgtn.bdimg.com/it/u=3252521864,872614242&fm=26&gp=0.jpg', 'http://img4.imgtn.bdimg.com/it/u=2987776682,123111704&fm=26&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=2388795280,390308967&fm=26&gp=0.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    //导航列表数据
    navList:[
      { name: '正在热映', reqPath:'/v2/movie/in_theaters'},
      { name: '即将上映', reqPath: '/v2/movie/new_movies' },
      { name: 'TOP', reqPath: '/v2/movie/top250'}
    ]
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