let express=require("express")
let mongoose=require("mongoose");
const cors = require('cors');
const enquiryRoutes = require("./App/routes/web/enquiryRoutes");


require('dotenv').config()

let app= express();
app.use(cors())

app.use(express.json());

app.use('/api/website/enquiry',enquiryRoutes)

//connect to mongoose
mongoose.connect(process.env.DBURL).then(()=> {
    console.log("connect to mongoDB")
    app.listen(process.env.PORT || 3000, () =>{
        console.log("Server is running")
    })   
}).catch((err) => {
    console.log(err)
})