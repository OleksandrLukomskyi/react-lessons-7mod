import './store/store';

import React, { Suspense, lazy } from 'react';
import Layout from 'layout/Layout';
import { Routes, Route } from 'react-router-dom';
import PostsPage from 'pages/PostsPage';
const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const TodoPage = lazy(() => import('pages/TodoPage'));
const Layout2 = lazy(() => import('layout/Layout2'));
const TodoDetailsPage = lazy(() => import('pages/TodoDetailsPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<>loading2...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route
              path="products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="posts" element={<PostsPage/>} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="todo/:todoId" element={<TodoDetailsPage />} />
          </Route>
          <Route path="/pages" element={<Layout2 />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="todo" element={<TodoPage />} />
          </Route>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
