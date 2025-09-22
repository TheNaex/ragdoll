# 🎮 RageMP Ragdoll 

Este proyecto ha sido creado como una **forma de testeo** en RageMP.  
Su uso es **libre** y está en constante mejora.

Actualmente se está trabajando en lograr una **transición más realista** al levantarse desde el estado de ragdoll, ya que por ahora el personaje se pone de pie de forma poco **fluida** en lugar de hacerlo como corresponde

---
## ✨ Versión 0.2
Mejoras clave en sincronización, manejo de estados y depuración, manteniendo el ragdoll de 5 minutos y levantamiento suave:

Sincronización remota: Integración de callRemote en cliente y broadcast en servidor para consistencia multijugador.
Manejo de estados: Variable isRagdollActive para rastreo manual, resolviendo fallos en levantamiento.
Auto-levantamiento: Temporizador de 300 s con cancelación y transición suave.
Validaciones cliente: Chequeos para vehículos, muerte y delay de 50 ms en teclas.
Función performStandUp: Centraliza lógica de levantamiento para fluidez visual.
Verificación servidor: Tolerancia con player.id, eliminando warnings y asegurando broadcasts.
Logs detallados: Información precisa en consola para monitoreo.

Esta versión optimiza la estabilidad sin alterar la mecánica principal. Si requiere ajustes adicionales

---
## ✨ Version 0.1
Separación de la lógica del ragdoll en cliente y servidor para mayor modularidad.
Implementación de control de duración del ragdoll con variable configurable.
Ahora no podremos usar el ragdoll en vehiculos
Se ha mejorado la forma en que el personaje se levanta del Ragdoll

---

## 🚀 Características
- Activar y desactivar el modo ragdoll con la tecla X 
- Sincronización con otros jugadores para que todos vean la acción. (Estoy testeando esto) 

---

## 🔮 Próximos cambios
- [ ] Implementar una transición fluida al levantarse del ragdoll.  
- [ ] No se realizara ragdoll al escribir en el chat
- [ ] Posible integración con sistemas de rol (heridas, caídas, etc.).  

---

## 📜 Licencia
Este proyecto se distribuye bajo la licencia **MIT**, lo que significa que puedes usarlo, modificarlo y compartirlo libremente.  
Consulta el archivo [LICENSE](./LICENSE) para más detalles.
