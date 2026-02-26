import * as peace from './peace_library.js';

peace.configure();
peace.create_teams();

const ADMINS = [
    "6A2E3EB992DD73E4",
    "10232242",
    "35834829"
];

function isAdmin(player) {
    return ADMINS.includes(player.id);
