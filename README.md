# Aplicación de eCommerce

Esta aplicación móvil permite a los usuarios navegar, comprar y gestionar productos en una plataforma de eCommerce.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Funcionalidades del proyecto](#funcionalidades-del-proyecto)
  - [Visualización de Productos](#visualización-de-productos)
  - [Detalles de Producto](#detalles-de-producto)
  - [Gestión del Carrito](#gestión-del-carrito)
  - [Flujo de Compra](#flujo-de-compra)
- [Dependencias](#dependencias)
- [Uso](#uso)

## Instalación
Para ejecutar este proyecto, asegúrate de tener instaladas las siguientes versiones de React Native, Node.js y npm:

- React Native: `0.74.0`
- Node.js: `v20.12.2`
- npm: `10.5.0`

Después de asegurarte de tener las versiones correctas instaladas, sigue estos pasos:

1. Clona el repositorio en tu local: `https://github.com/albertooherm/ecommerce-store-test`.
2. Navega al directorio del proyecto: `cd ecommerce-store-test `.
3. Instala las dependencias ejecutando `npm install`.
4. Inicia el servidor de desarrollo con `npm start`.

## Funcionalidades del proyecto
### Visualización de Productos
La aplicación permite a los usuarios ver una lista de productos disponibles para la compra. Los productos se muestran en una disposición de cuadrícula o lista, proporcionando a los usuarios una representación visual de cada artículo.

### Detalles de Producto
Los usuarios pueden tocar un producto para ver sus detalles, incluyendo el nombre, descripción, precio e imágenes.

### Gestión del Carrito
La aplicación incluye una característica de carrito que permite a los usuarios añadir productos a su carrito de compras. Los usuarios pueden ver su carrito, actualizar la cantidad de artículos y eliminar productos del carrito según sea necesario. El carrito mantiene su estado incluso cuando la aplicación se actualiza.

### Flujo de Compra
Una vez que los usuarios han seleccionado los productos deseados, pueden proceder al proceso de pago. Tras una compra exitosa, los usuarios reciben un recibo confirmando su pedido.

## Dependencias
Este proyecto depende de las siguientes tecnologías:

- `React Native`
- `Node.js`
- `npm`
- Las dependencias adicionales se pueden encontrar en el archivo `package.json`.

## Uso
Para usar la app, sigue estos pasos:

1. Lanza la app en tu dispositivo móvil o emulador.
2. Navega a través de los productos disponibles.
3. Toca un producto para ver sus detalles.
4. Añade productos a tu carrito ajustando la cantidad y tocando el botón "Añadir al Carrito".
5. Revisa tu carrito y procede al pago cuando estés listo.
6. Completa la compra y recibe un ticket de compra.
