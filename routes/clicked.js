const route = require("express").Router()
const gpio = require("onoff").Gpio()

var led = new gpio(4, 'out')

route.get("/", (req, res) => {
    res.render("click.hbs")
})

route.post("/", (req, res) => {
    let button_val_on = req.body.led_on
    let button_val_off = req.body.led_off
    console.log("button_val_off = " + button_val_off);
    console.log("button_val_on = " + button_val_on);
    if(button_val_off == off){
        led.writeSync(0);
    }
    if(button_val_on == on){
        led.writeSync(1);
    }
    res.render("click.hbs", {
        mssg : "Completed!"
    })
})

module.exports = route