let ragdollDuration = 300000; // Duración del ragdoll en milisegundos (5 minutos)
let ragdollTimeout = null; // Temporizador para auto-levantamiento (opcional)
let isRagdollActive = false; // Variable local para rastrear estado manualmente

mp.keys.bind(0x58, true, () => { // Tecla X
    const player = mp.players.local;

    // Ignorar si está en vehículo o muerto
    if (player.isInAnyVehicle(false) || player.isDead()) return;

    // Delay breve para verificar estado actualizado
    setTimeout(() => {
        if (!isRagdollActive) {
            // Aplicar ragdoll largo y notificar al servidor
            mp.game.ped.setPedToRagdoll(player.handle, ragdollDuration, 0, 0, true, false, false);
            player.resetRagdollTimer();
            isRagdollActive = true;

            // Llamada remota para sincronización
            mp.events.callRemote('setPlayerRagdoll', true);

            // Temporizador para auto-levantamiento (opcional)
            ragdollTimeout = setTimeout(() => {
                if (isRagdollActive) {
                    performStandUp(player);
                    isRagdollActive = false;
                    ragdollTimeout = null;
                }
            }, ragdollDuration);

        } else {
            // Levantamiento inmediato con transición suave
            performStandUp(player);
            isRagdollActive = false;
            if (ragdollTimeout) {
                clearTimeout(ragdollTimeout);
                ragdollTimeout = null;
            }
        }
    }, 50); // Delay para sincronización de estado
});

// Función auxiliar para levantamiento suave
function performStandUp(player) {
    player.clearTasksImmediately();
    // Aplicar ragdoll breve para transición visual (su lógica original)
    mp.game.ped.setPedToRagdoll(player.handle, 0, 1000, 0, true, false, false);
    // Llamada remota
    mp.events.callRemote('setPlayerRagdoll', false);
}

// Sincronización con otros jugadores (sin cambios mayores)
mp.events.add('updateRagdollState', (playerHandle, state) => {
    const player = mp.players.atHandle(playerHandle);
    if (player && player !== mp.players.local) {
        if (state) {
            mp.game.ped.setPedToRagdoll(player.handle, ragdollDuration, 0, 0, true, false, false);
        } else {
            player.clearTasksImmediately();
            mp.game.ped.setPedToRagdoll(player.handle, 0, 1000, 0, true, false, false);
        }
    }
});




