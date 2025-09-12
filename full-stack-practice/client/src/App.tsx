import { Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
