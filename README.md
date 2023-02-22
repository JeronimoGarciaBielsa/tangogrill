# Tango Grill
## _E-commerce de accesorios para asados_
#### Deploy :
- https://tangogrill.vercel.app/

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Tango Grill es una SPA creada con React, Css y Firebase como base de datos

## Funciones

- Filtrado de productos por categoria y por ID
- Creacion de orden de compra con ID propio
- Visualizacion del detalle de cada producto
- Ingreso de datos del cliente para el manejo de ordenes
- Visualizacion del carrito

## Tecnologia

Tango Grill utiliza estos proyectos de codigo abierto para trabajar:

- React.Js - Libreria de Javascript
- Css - Diseño de la SPA
- Node.Js - Ejecucion de la SPA
- Firebase - Base de datos

## Instalacion

Tango Grill requiere React para correr la SPA.

```sh
- Clonar el repositorio
- Instalar las dependencias
- Configurar variables de entorno (ver .env.example)
- Ejecutar npm start
```

## Logica y estructura de la SPA

Tango Grill esta separada por componentes donde cada uno maneja su propia logica. El componente padre maneja la logica de cada ruta por ej: ItemListContainer hace los llamados a la base de datos

El servicio de notificaciones maneja mensajes de exito y error, verde y rojo respectivamente

La comunicacion con el backend esta manejada por funciones exportadas desde services/firebase/firestore.

Tango Grill esta diseñada con Css puro, no fueron utilizados frameworks