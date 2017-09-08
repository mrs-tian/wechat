const app = getApp();
const utils = require("../../utils/util.js");

Page({

  data: {
    hasResult: true,
    results:[]
  },

  staticData: {
    inputValue: ""
  },

  onLoad() {
    this.getSearchResults();
  },

  getSearchResults() {
    const data = {
      keyword: this.staticData.inputValue,
      distinct: app.globalData.distinct
    };
    utils.sendRequest("get_search_list", data, "POST", this.handleGetSearchSucc.bind(this));
  },

  handleGetSearchSucc(res) {
      console.log(res);
    if(res.data.ret) {
      this.setData({
        hasResult: true,
        results: res.data.data
      })
    }else{
      this.setData({
        hasResult: false
      })
    }
  },

  handleInputChange(e) {
    this.staticData.inputValue = e.detail.value;
  },

  handleSearchSubmit() {
   this.getSearchResults();
  },

  handleDetailTap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.index
    })
  }
})