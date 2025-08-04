import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

export function App() {


  return (
    <>
      <Routes>
        <Route path='/' element= {<Header />} >
          <Route index element={<Catalog />} />
          <Route path='/details/:productId' element= {<Details />} />
          <Route path='/about' element= {<About />} />
          <Route path='/*' element= {<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
