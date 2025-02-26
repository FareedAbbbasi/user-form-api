const { enquiryInsert, enquiryView, enquiryDelete, enquiryUpdate } = require("../../controllers/web/enquiryControl");
let express=require("express")

let enquiryRoutes= express.Router();

enquiryRoutes.post('/insert',enquiryInsert)

enquiryRoutes.get('/view', enquiryView)

enquiryRoutes.delete('/delete/:id', enquiryDelete)

enquiryRoutes.put('/enquiryUpdate/:id', enquiryUpdate)

module.exports=enquiryRoutes;
