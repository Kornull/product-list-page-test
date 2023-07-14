import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';

import { MainPage } from 'src/pages/Main';
import { Layout } from '../Layout';
import { NotFoundPage } from 'src/pages/NotFOund';
import { ProductPage } from 'src/pages/Product/ProductPage';

import { useGlobalState } from 'src/state';
import { STATE_DATA_CALLS } from 'src/types';

function App() {
  const [product] = useGlobalState(STATE_DATA_CALLS.PRODUCT);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (product === null && location.pathname.includes('product')) {
      navigate('/');
    }
  }, [product]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
