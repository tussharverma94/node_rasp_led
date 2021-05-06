const route = require("express").Router()
const gpio = require("onoff").Gpio()

var led = new gpio(4, 'out')

route.get("/", (req, res) => {
    res.render("click.hbs")
})

route.post("/", (req, res) => {
    let button_val = req.body.led_button
    console.log(button_val);
    if(parseInt(button_val) == 0){
        led.writeSync(0);
    }
    if(parseInt(button_val) == 1){
        led.writeSync(1);
    }
    res.render("click.hbs", {
        messg : "Completed!"
    })
})

module.exports = route