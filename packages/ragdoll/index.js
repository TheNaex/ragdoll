console.log("✅ Modulo ragdoll Cargado"); // Para depurar


mp.events.add('setPlayerRagdoll', (player, state) => {
    // Solo enviar a los demás jugadores, no al jugador local
    mp.players.forEach(p => {
        if (p !== player) {
            p.call('updateRagdollState', [player.handle, state]);
        }
    });
});

