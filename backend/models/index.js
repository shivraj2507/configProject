const mongoose = require("mongoose");
const configSchema = new mongoose.Schema({
  configId: {
    type: String,
    required: true,
  },
  remark: {
    type: String,

    default: "",
  },
});
module.exports = mongoose.model("config", configSchema);
