# Tu tarea

Formas parte del equipo que explora Marte enviando vehículos teledirigidos a la superficie del planeta. Desarrolla una API que traduzca los comandos enviados desde la Tierra a instrucciones comprensibles para el vehículo explorador.

# Requisitos

- Se le da el punto de partida inicial (x,y) de un rover y la dirección (N,S,E,W) a la que está orientado. ✅
- El robot recibe una matriz de caracteres de comandos. ✅
- Implementa comandos que muevan el vehículo hacia delante/atrás (f,b). ✅
- Implementar comandos que giren el vehículo a izquierda/derecha (l,r). ✅
- Implementa envolturas en los bordes. Pero ten cuidado, los planetas son esferas.
- Implementar la detección de obstáculos antes de cada movimiento a una nueva casilla. Si una secuencia dada de comandos encuentra un obstáculo, el robot se mueve hasta el último punto posible, aborta la secuencia e informa del obstáculo.

# Reglas

- Hardcore TDD. Sin excusas.
- Cambio de roles (conductor, navegante) después de cada ciclo de TDD.
- Sin fases rojas durante la refactorización.
- Cuidado con los casos extremos y las excepciones. No podemos permitirnos perder un explorador de Marte, sólo porque los desarrolladores pasaron por alto un puntero nulo.
