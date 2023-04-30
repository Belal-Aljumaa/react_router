import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { PageMitte } from './PageMitte';
import { PageSteglitz } from './PageSteglitz';
import { PageTiergarten } from './PageTiergarten';
import { Helmet } from 'react-helmet';

export const PageBerlin = () => {
  return (
    <>
      <Helmet>
        <title>Berlin Info Site</title>
      </Helmet>
      <p>Welcome to the Berlin page.</p>
      <nav>
        <NavLink to="tiergarten">Tiergarten</NavLink>
        <NavLink to="steglitz">Steglitz</NavLink>
        <NavLink to="mitte">Mitte</NavLink>
      </nav>
      <Routes>
        <Route path="tiergarten" element={<PageTiergarten />} />
        <Route path="steglitz" element={<PageSteglitz />} />
        <Route path="mitte/*" element={<PageMitte />} />
        <Route path="/" element={<Navigate to="tiergarten" replace />} />
      </Routes>
    </>
  );
};
