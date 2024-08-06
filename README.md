# Proyecto de E-commerce

## Deploy
https://ecommerce-nico-alvaredo.netlify.app

## Descripción del Proyecto

Este proyecto es una aplicación de e-commerce desarrollada con React. Los usuarios pueden navegar por una lista de productos, agregarlos a un carrito de compras, y proceder a un proceso de checkout. Al finalizar la compra, se genera una orden que se almacena en Firestore, y se actualiza el stock de los productos en la base de datos.

## Estructura del Proyecto

La SPA cuenta con varias carpetas dentro del directorio `src`:

### assets

- `logo.png`: Logo de la ecommerce.

### components

- `Cart`: Componente para renderizar el carrito de compras.
- `CartWidget`: Componente para mostrar el ícono y la cantidad de elementos en el carrito.
- `Checkout`: Componente para gestionar el proceso de checkout.
- `CheckoutForm`: Formulario para que el usuario ingrese sus datos durante el checkout.
- `Item`: Componente para mostrar los detalles de un producto individual.
- `ItemCount`: Componente para seleccionar la cantidad de productos.
- `ItemDetail`: Componente para mostrar los detalles completos de un producto.
- `ItemDetailContainer`: Contenedor para gestionar la lógica de obtención de los detalles del producto.
- `ItemList`: Componente para mostrar la lista de productos.
- `ItemListContainer`: Contenedor para gestionar la lógica de obtención de la lista de productos.
- `Loader`: Componente de carga para mostrar durante las operaciones asincrónicas.
- `NavBar`: Barra de navegación para la aplicación.

### context

- `CartContext`: Contexto que mantiene el estado del carrito y provee controladores/funciones para invocar y ejecutar en cada componente.

### pages

Las páginas de la aplicación se definen en el archivo `App.js` mediante las rutas:

- **CategoryDetail**: Página que muestra los productos de una categoría específica. La ruta es /category/:id, donde id corresponde a la categoría seleccionada.
- **Home**: Página principal en la ruta /, donde se renderizan todas las categorías. Cada categoría redirige a CategoryDetail.
- **ItemDetailContainer**: Página que muestra los detalles de un producto específico.
- **Cart**: Página que muestra el carrito de compras.
- **Contacto**: Página de contacto.
- **Checkout:** Página de checkout.

**Nota:** Todos los archivos tienen creados y linkeados su respectivo archivo de estilos `.css`.

Algunos componentes están estilizados con clases de Bootstrap para añadir padding, márgenes, entre otros estilos.

## Herramientas Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Firebase**: Plataforma de Google para el desarrollo de aplicaciones móviles y web.
  - **Firestore**: Base de datos NoSQL utilizada para almacenar la información de los productos y las órdenes.
- **Vite**: Herramienta de desarrollo rápido para proyectos de frontend.
- **CSS**: Para el diseño y la apariencia de la aplicación.

## Comandos para Poder Ejecutar la Aplicación

Para instalar las dependencias del proyecto:

```bash
npm install
```

Para ejecutar la aplicación en modo de desarrollo:

```bash
npm run dev
```

Para crear una versión de producción de la aplicación:

```bash
npm run build
```

Para previsualizar la versión de producción:

```bash
npm run preview
```
