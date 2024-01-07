const config = require("../models/index");

// create controller
const createController = async (req, res) => {
  try {
    const { configId } = req.params || req.body;
    console.log(configId);
    if (!configId) {
      return res.status(403).json({
        sucess: false,
        message: "Config id is required",
      });
    }
    const configData = await config.findOne({ configId: configId });
    console.log(configData);
    if (configData) {
      return res.status(403).json({
        sucess: false,
        message: "This Config id is already used!",
      });
    }
    const createConfig = await config.create({ configId });
    console.log(createConfig);
    return res.status(203).json({
      sucess: true,

      message: ["sym1, sym2, sym3", "sym4, sym6, sym8", "sym5, sym1, sym0"],
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      sucess: false,
      message: error,
    });
  }
};

//update handler
const updateController = async (req, res) => {
  try {
    const { configId, remark } = req.body;
    if (!configId || !remark) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the fields",
      });
    }
    const configData = await config.findOne({ configId: configId });
    if (!configData) {
      return res.status(400).json({
        success: false,
        message: "This config id no data present",
      });
    }
    const updateRemark = await config.findOneAndUpdate(
      { configId: configId },
      { remark: remark },
      { new: true }
    );
    console.log("updated user--->", updateRemark);
    return res.status(200).json({
      success: true,
      message: "success",
    });
  } catch (error) {
    console.log("During update===>", error);
    return res.status(400).json({
      success: false,
      message: "update fail",
    });
  }
};

module.exports = { createController, updateController };
