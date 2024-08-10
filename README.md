# E-commerce Project

## Deploy
https://ecommerce-nico-alvaredo.netlify.app

## Project Description

This project is an e-commerce application developed with React. Users can browse a list of products, add them to a shopping cart, and proceed to a checkout process. Upon completing the purchase, an order is generated and stored in Firestore, and the product stock is updated in the database.

## Project Structure

The SPA (Single Page Application) has several folders within the `src` directory:

### assets

- `logo.jpg`: E-commerce logo.

### components

- `Cart`: Component for rendering the shopping cart.
- `CartWidget`: Component to display the cart icon and the number of items in the cart.
- `Checkout`: Component to manage the checkout process.
- `CheckoutForm`: Form for the user to enter their details during checkout.
- `Item`: Component to display the details of an individual product.
- `ItemCount`: Component to select the quantity of products.
- `ItemDetail`: Component to show the complete details of a product.
- `ItemDetailContainer`: Container to manage the logic for fetching product details.
- `ItemList`: Component to display the list of products.
- `ItemListContainer`: Container to manage the logic for fetching the product list.
- `Loader`: Loading component to display during asynchronous operations.
- `NavBar`: Navigation bar for the application.

### context

- `CartContext`: Context that maintains the cart state and provides handlers/functions to be invoked and executed in each component.

### pages

The application's pages are defined in the `App.js` file through routes:

- **CategoryDetail**: Page that shows the products of a specific category. The route is /category/:id, where id corresponds to the selected category.
- **Home**: Main page at the / route, where all categories are rendered. Each category redirects to CategoryDetail.
- **ItemDetailContainer**: Page that shows the details of a specific product.
- **Cart**: Page that shows the shopping cart.
- **Contacto**: Contact page.
- **Checkout:** Checkout page.

**Note:** All files have their respective `.css` style files created and linked.

Some components are styled with Bootstrap classes to add padding, margins, and other styles.

## Tools Used

- **React**: JavaScript library for building user interfaces.
- **Firebase**: Google's platform for developing mobile and web applications.
  - **Firestore**: NoSQL database used to store product information and orders.
- **Vite**: Fast development tool for frontend projects.
- **CSS**: For the design and appearance of the application.

## Commands to Run the Application

To install the project dependencies:

```bash
npm install
```

To run the application in development mode:

```bash
npm run dev
```

To build a production version of the application:

```bash
npm run build
```

To preview the production version:

```bash
npm run preview
```
