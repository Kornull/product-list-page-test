import { Route, Routes } from 'react-router';

import { MainPage } from './pages/Main';
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFOund';

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
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
