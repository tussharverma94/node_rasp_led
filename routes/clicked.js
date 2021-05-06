const route = require("express").Router()
const gpio = require("onoff").Gpio()

var led = new gpio(4, 'out')
let mssg_to_send = "LED is OFF"

route.get("/", (req, res) => {
    res.render("click.hbs", {
        mssg : mssg_to_send
    })
})

route.post("/", (req, res) => {
    let button_val_on = req.body.led_on
    let button_val_off = req.body.led_off
    console.log("button_val_off = " + button_val_off);
    console.log("button_val_on = " + button_val_on);
    if(button_val_off == "off"){
        led.writeSync(0);
        mssg_to_send = "LED is Off"
    }
    if(button_val_on == "on"){
        led.writeSync(1);
        mssg_to_send = "LED is On"
    }
    res.render("click.hbs", {
        mssg : mssg_to_send
    })
})

module.exports = route