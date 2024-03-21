import React from 'react'
import ReactDOM from 'react-dom/client';
import Content from './components/Content.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Error from './components/Error.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Shimmer from './components/Shimmer.jsx';

import './index.css'
import App from './App.jsx';

const Grocery = lazy(() => import('./components/Grocery.jsx'));

const routes = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
          {
              path: '/',
              element: <Content />
          },
          {
              path: '/grocery',
              element:
                  <Suspense fallback={<Shimmer />}>
                      <Grocery />
                  </Suspense>
          },
          {
              path: '/about',
              element: <About />
          },
          {
              path: '/cart',
              element: <Cart />
          },
          {
              path: 'restaurant/:id',
              element: <RestaurantMenu />
          }
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
