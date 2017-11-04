const _ = require("underscore");
const hue = require("node-hue-api");
const HueApi = hue.HueApi
const lightState = hue.lightState;

const host = "bridge_ip_address";
const username = "your_username";
const api = new HueApi(host, username);
const state = lightState.create();

var lightUp = (result) => {
    console.log(JSON.stringify(result, null, 2))

    _.each(result.lights, (light) => {
        // https://teamcolorcodes.com/
        // Texas - BURNT ORANGE HEX COLOR: #BF5700; RGB: (191, 87, 0)
        // LSU - PURPLE HEX COLOR: #BF5700; RGB: (70, 29, 124)
        api.setLightState(light.id, state.on().rgb(191, 87, 0))
        .then(console.log(result))
        .done();
    })
}

api.lights()
    .then(lightUp)
    .done();