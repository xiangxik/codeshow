var wxcode = require("../../utils/wxcode.js");

Page({
  data: {
    code: "00000000"
  },

  onLoad: function(opts) {
    if (opts.code) {
      this.data.code = opts.code;
    }

    var code = this.data.code;

    wxcode.barcode("barcode", code, 680, 200);
    wxcode.qrcode("qrcode", code, 600, 600);
  }
})