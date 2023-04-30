import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export const PageBrandenburgGate = () => {
  return (
    <>
      <Helmet>
        <title>Branden-burg-Gate</title>
      </Helmet>
      <p>Welcome to the BrandenburgGate page.</p>
      <p>Welcome to the Brandenburg Gate page which is located in <NavLink to="/germany/berlin">Berlin</NavLink>.</p>
    </>
  );
};
