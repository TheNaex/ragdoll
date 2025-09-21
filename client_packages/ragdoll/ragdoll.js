let ragdollDuration = 300000; // Duración inicial del ragdoll en milisegundos 5 minutos

mp.keys.bind(0x58, true, () => { // X
    const player = mp.players.local;

    // Ignorar si está en vehículo
    if (player.isInAnyVehicle(false)) return;

    if (!player.isRagdoll()) {
        // Primer X: aplicar ragdoll largo
        mp.game.ped.setPedToRagdoll(player.handle, ragdollDuration, -1, 0, true, false, false);

        // Reiniciar el temporizador del ragdoll para extender su duración antes de pulsar X de nuevo.
        player.resetRagdollTimer();

    } else {
        // Segundo X: levantarse antes
        player.clearTasksImmediately();
        mp.game.ped.setPedToRagdoll(player.handle, 0, 1000, 0, true, false, false);
    }
});





// Sincronización con otros jugadores
mp.events.add('updateRagdollState', (playerHandle, state) => {
    const player = mp.players.atHandle(playerHandle);
    if (player && player !== mp.players.local) {
        if (state) {
            mp.game.ped.setPedToRagdoll(player.handle, -1, -1, 0, true, true, true);
        } else {
            player.clearTasksImmediately(); // otros jugadores se levantan instantáneo
        }
    }
});
