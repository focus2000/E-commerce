import dotenv from 'dotenv'

dotenv.config();


const mongoose = require('mongoose')

const url = process.env.URI
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })

        console.log('MongoDB Connected')
    } catch (err) {
      console.error(err.message)
      process.exit(1)
    }
}

export default connectDB