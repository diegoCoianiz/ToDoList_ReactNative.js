/* connection to MongoDB Atlas */

require('dotenv').config()
import { connect } from "mongoose"

const dbConnect = () => {
    const db_uri = process.env.URI
    connect(db_uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err, res) => {
        if(!err){
            console.log("*** DataBase conecction complete ***")
        } else {
            console.log("*** DataBase conecction error ***")
        }
    })
}

export default dbConnect