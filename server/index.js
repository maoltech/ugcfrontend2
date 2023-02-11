const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const router = require('./router/index')

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use('/ugc', router )

const port = process.env.PORT || 6000
try {
app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})
} catch (error) {
    console.error({message: error});
}



