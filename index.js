let params = new URLSearchParams( location.search );
let points = 0;
ComfyJS.onCommand = ( user, command, message, flags, extra) => {
    if (command === params.get( "user" ) + "addpoint" && (flags.mod || flags.broadcaster)) {
        points++;
        document.getElementById("points").innerText = `${points}`
    }
    else if (command === params.get( "user" ) + "setpoint" && (flags.mod || flags.broadcaster)) {
        points = Number(message);
        document.getElementById("points").innerText = `${points}`
    }
}

ComfyJS.Init( "JaxDagger" );
