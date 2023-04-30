import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PageGermany } from './pages/PageGermany';
import { PageFrance } from './pages/PageFrance';
import { PageSpain } from './pages/PageSpain';

function App() {
  return (
    <div>
      <h1>Travel Info Site</h1>
      <nav>
        <NavLink to="/germany">Germany</NavLink>
        <NavLink to="/france">France</NavLink>
        <NavLink to="/spain">Spain</NavLink>
      </nav>

      <Routes>
        <Route path="/germany/*" element={<PageGermany />} />
        <Route path="/france" element={<PageFrance />} />
        <Route path="/spain" element={<PageSpain />} />
        <Route path="/" element={<Navigate to="/germany" replace />} />
      </Routes>
    </div>
  );
}

export default App;
