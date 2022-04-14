// require('dotenv').config()
const express = require('express')
const handleLogin = require('./Routes/Login')
// const handleItem = require('./Routes/Item')
const handleRegister = require('./Routes/Register')
// const handleCafetarian = require('./Routes/Cafetarian')
// const handleOrder = require('./Routes/Order')
// const bodyParser = require('body-parser')
// const path = require('path')
const {createClient} = require('@supabase/supabase-js')
const http  = require("http")
// const cors = require("cors")

const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
// app.use(express.static('./Client/build'))
// app.use(cors())

const PORT = process.env.PORT || 8000

const server = http.createServer(app)


const supabase = createClient('https://gdexnfbjauhkojfkrxvl.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTI0NzM5OSwiZXhwIjoxOTUwODIzMzk5fQ.NIWP_PrlawRYjBgANscmM4r2-zG_vPu8FaLjrydapK0'
)


global.supabase=supabase


server.listen(PORT,()=>{
    console.log("server is live...")
    

})
app.use('/api/login',handleLogin)
app.use('/api/register',handleRegister)
// app.use('/api/Item',handleItem)
// app.use('/api/Cafetarian',handleCafetarian)
// app.use('/api/Order',handleOrder)

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
// });
