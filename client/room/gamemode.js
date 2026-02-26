import * as peace from './peace_library.js';

peace.configure();
peace.create_teams();

}

import * as peace from './peace.library.js';

peace.createRoom({
    // настройки режима
});

// 👇 СЮДА

peace.on("playerSpawn", (player) => {

    if (player.team === BLUE_TEAM) {
        player.setSkin("prisoner");
    }

    if (player.team === RED_TEAM) {
        player.setSkin("prisoner");
    }

});
