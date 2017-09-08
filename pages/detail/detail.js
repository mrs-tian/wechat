const app = getApp();
const utils = require("../../utils/util.js");
Page({
  data: {
    address: "",
    type: "sell",
    textType: "",
    message: "",
    contact: ""
  },
 
  staticData: {
    id: ""
  },

  onLoad: function (options) {
    this.staticData.id = options.id;
    this.getDetailInfo();
  },

  getDetailInfo() {
    const data = {
      id: this.staticData.id,
        distinct: app.globalData.distinct
    };
    utils.sendRequest("get_item", data, "POST", this.handleGetDetailSucc.bind(this));
  },

  handleGetDetailSucc(res) {
    const result = res.data.data;
    this.setData({
      address: result.address,
      type: result.type,
      textType: result.type == "buy" ? "求购" : "转让",
      message: result.message,
      contact: result.contact
    })
    console.log(res);
  }

  
})