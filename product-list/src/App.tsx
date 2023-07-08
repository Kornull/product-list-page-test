import { Route, Routes } from 'react-router';

import { MainPage } from './pages/Main';
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFOund';
import { ProductPage } from './pages/Product/ProductPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path="/product/:id"
          element={<ProductPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
