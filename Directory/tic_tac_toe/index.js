// Setting up the mode selection
// DOM variables
const pvp = document.getElementById("2Player")
const cp = document.getElementById("1Player")
const modeDisplay = document.getElementById("selected-mode")

// Creating functions for mode changes
pvp.addEventListener('click', function(event) {
    return modeDisplay.innerText("2 Player")
});

cp.addEventListener('click', function(event) {
    return modeDisplay.innerText("1 Player")
});

// If modeDisplay is One Player
// Player goes first. On click, td changes to 'X'. Computer goes next. Computer picks a random tile = '' and places an 'O'.

// If modeDisplay is Two Player
