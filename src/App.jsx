import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CastPage } from './pages/CastPage';
import { HomePage } from "./pages/HomePage";
import { ShowPage } from "./pages/ShowPage";
import { ShowsPage } from "./pages/ShowsPage";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shows/' element={<ShowsPage />} />
        <Route path='/shows/:id' element={<ShowPage />} />
        <Route path='/shows/:id/cast' element={<CastPage />} />
      </Routes>
      <Footer />
    </>
  )
}

