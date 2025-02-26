const enquiryModel = require("../../models/enquiryModel");

// insert api
let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;
  let enquiry = new enquiryModel({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
  enquiry.save().then(() => {
    res.send({
      status: 1,
      msg: "Data saved successfully",
      enquirydata: enquiry,
    });
  });
};

// view api
let enquiryView = async (req, res) => {
  let enquiry = await enquiryModel.find();
  res.send({ status: 1, msg: "Data view successfully", enquiryList: enquiry });
};

// delete api

let enquiryDelete = async (req, res) => {
  let enqid = req.params.id;
  try {
    let enquiry = await enquiryModel.deleteOne({ id: enqid });
    res.send({
      status: 1,
      mesg: "Data delete Successfully",
      enquiryList: enquiry,
    });
  } catch (error) {
    console.log(error);
    res.send({ status: 1, mesg: "Data delete Failed", error: error });
  }
};

// update api

let enquiryUpdate = async (req, res) => {
  let enqid = req.params.id;
  let { name, email, phone, message } = req.body;
  let updateObj = {
    name,
    phone,
    email,
    message,
  };
  let resEnquiry = await enquiryModel.updateOne({ _id: enqid}, updateObj);
  res.send({
    status: 1,
    message: "ENquiry update successfully",
    UpdateEnquiry: resEnquiry,
  });
};

module.exports = { enquiryInsert, enquiryView, enquiryDelete, enquiryUpdate };
