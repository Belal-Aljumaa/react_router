import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PageGermany } from './pages/PageGermany';
import { PageFrance } from './pages/PageFrance';
import { PageSpain } from './pages/PageSpain';
import { Helmet } from 'react-helmet';
import { Blank } from './components/Blank';
import { Page404 } from './components/Page404';
import { CityChooseMessage } from './components/CityChooseMessage';
import { City } from './components/City';
import cities from './data/spanishCities.json';

function App() {
  return (
    <div>
      <Helmet>
        <title>Travel Info Site</title>
      </Helmet>
      <h1>Travel Info Site</h1>
      <nav>
        <NavLink to="/germany">Germany</NavLink>
        <NavLink to="/france">France</NavLink>
        <NavLink to="/spain">Spain</NavLink>
      </nav>

      <Routes>
        <Route path="/germany/*" element={<PageGermany />} />
        <Route path="/france" element={<PageFrance />} />
        <Route path="spain" element={<PageSpain cities={cities} />}>
          <Route path=":idCode" element={<City />} />
          <Route index element={<CityChooseMessage />} />
        </Route>
        <Route path="/" element={<Navigate to="/germany" replace />} />
        <Route path="/" element={<Blank />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
