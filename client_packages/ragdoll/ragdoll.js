let isRagdoll = false;

mp.keys.bind(0x58, true, () => {
    const player = mp.players.local;

    if (!isRagdoll) {
        mp.game.ped.setPedToRagdoll(player.handle, -1, -1, 0, true, true, true); // Ragdoll normal, indefinido
        isRagdoll = true;
        mp.events.callRemote('setPlayerRagdoll', true);
    } else {
        player.clearTasksImmediately(); // Levanta al jugador
        isRagdoll = false;
        mp.events.callRemote('setPlayerRagdoll', false);
    }
});

mp.events.add('updateRagdollState', (playerHandle, state) => {
    const player = mp.players.atHandle(playerHandle);
    if (player && player !== mp.players.local) {
        if (state) {
            mp.game.ped.setPedToRagdoll(player.handle, -1, -1, 0, true, true, true); // Ragdoll normal para otros
        } else {
            player.clearTasksImmediately();
        }
    }
});


