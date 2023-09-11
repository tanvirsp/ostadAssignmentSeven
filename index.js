const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

const app = require("./app");


const port= process.env.RUNNING_PORT || 5500
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});