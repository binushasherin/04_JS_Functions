
var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

var player = {
    name: "virat",
    place: "london",
    health: 100
};


function showPlayerLocation(player) {
    console.log(`Player is at (${player.name}, ${player.place})`);
}


function showPlayerHealth(player) {
    console.log(`Player's health: ${player.health}`);
}

function showPlayerInfo(player) {
    showPlayerLocation(player);
    showPlayerHealth(player);
}

showPlayerInfo(player);
