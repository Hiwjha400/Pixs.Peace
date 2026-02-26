import * as peace from './peace_library.js';

peace.configure();
peace.create_teams();

}

peace.on("playerSpawn", (player) => {

    if (player.team === "RED_TEAM") {
        player.setSkin("prissioner");
    }

    if (player.team === "BLUE_TEAM") {
        player.setSkin("prissioner");
    }

});
