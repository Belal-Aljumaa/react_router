import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { PageBerlin } from './PageBerlin';
import { PageHannover } from './PageHannover';
import { PageHamburg } from './PageHamburg';
import { Helmet } from 'react-helmet';
import { Blank } from '../components/Blank';
import { Page404 } from '../components/Page404';

export const PageGermany = () => {
  return (
    <>
      <Helmet>
        <title>Germany Info Site</title>
      </Helmet>
      <p>Welcome to the Germany page.</p>
      <p>
        {' '}
        Be sure to visit cities like{' '}
        <NavLink to="/germany/hamburg">Hamburg</NavLink> or tourist sites such
        as the{' '}
        <NavLink to="/germany/berlin/mitte/brandenburgGate">
          Brandenburg Gate
        </NavLink>
        .
      </p>
      <nav>
        <NavLink to="hamburg">Hamburg</NavLink>
        <NavLink to="hannover">Hannover</NavLink>
        <NavLink to="berlin">Berlin</NavLink>
      </nav>
      <Routes>
        <Route path="hamburg" element={<PageHamburg />} />
        <Route path="hannover" element={<PageHannover />} />
        <Route path="berlin/*" element={<PageBerlin />} />
        <Route path="/" element={<Blank />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
