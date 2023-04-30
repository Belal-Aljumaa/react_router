import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { PageBerlin } from './PageBerlin';
import { PageHannover } from './PageHannover';
import { PageHamburg } from './PageHamburg';
import { Helmet } from 'react-helmet';

export const PageGermany = () => {
  return (
    <>
      <Helmet>
        <title>Germany Info Site</title>
      </Helmet>
      <p>Welcome to the Germany page.</p>
      <nav>
        <NavLink to="hamburg">Hamburg</NavLink>
        <NavLink to="hannover">Hannover</NavLink>
        <NavLink to="berlin">Berlin</NavLink>
      </nav>
      <Routes>
        <Route path="hamburg" element={<PageHamburg />} />
        <Route path="hannover" element={<PageHannover />} />
        <Route path="berlin/*" element={<PageBerlin />} />
      </Routes>
    </>
  );
};
