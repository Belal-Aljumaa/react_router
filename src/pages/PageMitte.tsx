import { NavLink, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { PageUnterDenLinden } from './PageUnterDenLinden';
import { PageBrandenburgGate } from './PageBrandenburgGate';
import { PageCheckpointCharlie } from './PageCheckpointCharlie';
import { Helmet } from 'react-helmet';
import { Page404 } from '../components/Page404';
import { Blank } from '../components/Blank';

export const PageMitte = () => {
  return (
    <>
      <Helmet>
        <title>Berlin Mitte Info Site</title>
      </Helmet>
      <p>Welcome to the Mitte page.</p>
      <nav>
        <NavLink to="checkpointCharlie">Checkpoint Charlie</NavLink>
        <NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
        <NavLink to="unterDenLinden">Unter den Linden</NavLink>
      </nav>
      <Routes>
        <Route path="checkpointCharlie" element={<PageCheckpointCharlie />} />
        <Route path="brandenburgGate" element={<PageBrandenburgGate />} />
        <Route path="unterDenLinden" element={<PageUnterDenLinden />} />
        <Route path="/" element={<Navigate to="checkpointCharlie" replace />} />
        <Route path="/" element={<Blank />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <div className="showArea">
        <Outlet />
      </div>
    </>
  );
};
