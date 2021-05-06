const express = require("express")
const app = express()
const clicked_sub = require("./routes/clicked")

app.set("view engine", "hbs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', clicked_sub)


app.listen(5555, () => {
    console.log("Server Started at : http://localhost:5555")
})

