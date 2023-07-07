# Maxibon Kata

A los desarrolladores de Karumi les encantan los helados. Y uno de nuestros helados favoritos se llama Maxibon:

Se acerca el verano y nuestro pequeño equipo a veces necesita Maxibones para trabajar mejor. Pero en las oficinas centrales de Karumi no siempre es fácil encontrar un Maxibon. Empezamos cada semana con 10 Maxibones, pero cuando sólo quedan 2 Maxibones o menos, tenemos que comprar más.

Los desarrolladores Karumi pueden consumir cero o un número positivo de maxibones. El equipo Karumi está compuesto por cinco ingenieros y cada vez que alguno de estos ingenieros va a la cocina coge algunos maxibones de la siguiente manera:
- Si el desarrollador es Pedro, coge tres maxibones.
- Si el desarrollador es Fran, coge un maxibon.
- Si el desarrollador es Davide, no coge ningún maxibon.
- Si el desarrollador es Sergio, coge dos maxibones.
- Si el desarrollador es Jorge, coge un maxibon.

Cuando un ingeniero de Karumi va a la cocina, pueden ir en grupo si es necesario, y sólo quedan 2 maxibones o menos tiene que enviar un mensaje a través de la API de Slack diciendo "Hola chicos, soy <NOMBRE DEL DESARROLLADOR>. Necesitamos más maxibones". Y el número de maxibones disponibles se incrementará automáticamente en 10 :cara_ligeramente_sonriente:. Si el número de maxibones que quedan es inferior al número de maxibones que el desarrollador intenta conseguir obtendrá sólo el número de maxibones disponibles.

## Original
https://github.com/Karumi/MaxibonKataKotlin