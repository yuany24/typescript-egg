"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let AddressSchema = new Schema({
    user_id: { type: String },
    company_id: { type: String },
    province: { type: String },
    city: { type: String },
    district: { type: String },
    addr: { type: String },
    status: { type: String, default: 'effective' },
    time_creation: { type: Date, default: function () { return new Date(); } },
    // detailed_address:String,
    differentiate: String,
    prin_name: { type: String },
    prin_phone: { type: String },
    is_default: { type: Boolean, default: true } //是否设为默认
    // zone_num:{type: String, default:'+86'} // 区域号
});
module.exports = mongoose.model('Address', AddressSchema);

