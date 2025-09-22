mp.events.add('setPlayerRagdoll', (player, state) => {
    // Verificación permisiva: solo ID definido
    if (!player || typeof player.id === 'undefined') {
        console.warn('Evento setPlayerRagdoll recibido sin jugador válido (player o player.id indefinido).');
        return;
    }

    // Log detallado corregido para precisión
    console.log(`Evento setPlayerRagdoll recibido de ${player.name} (ID: ${player.id}), estado: ${state ? 'activo' : 'inactivo'}, validación: ${player.valid ? 'válido' : 'inválido'}.`);

    // Broadcast solo a jugadores válidos
    let broadcastCount = 0;
    mp.players.forEach(p => {
        if (p !== player && p.valid) {
            p.call('updateRagdollState', [player.handle, state]);
            broadcastCount++;
        }
    });

    console.log(`Broadcast enviado a ${broadcastCount} jugadores remotos.`);
});
