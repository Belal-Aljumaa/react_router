import { Helmet } from 'react-helmet';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export const PageSpain = (props: any) => {
  const { cities } = props;
  const { idCode } = useParams();
  const city = cities.find((m: any) => m.idCode === idCode);

  return (
    <>
      <Helmet>
        <title>Spain Info Site</title>
      </Helmet>
      <p>
        Spain or the Kingdom of Spain (Reino de España), is a country primarily
        located in southwestern Europe with parts of territory in the Atlantic
        Ocean.
      </p>
      <p className="cityChoices">
        There are {cities.length} cities to visit:{' '}
        {cities.map((city: any, i: number) => {
          return (
            <span className="city" key={city.idCode}>
              <>
                <NavLink to={`${city.idCode}`}>{city.name}</NavLink>
                {cities.length - 1 > i && <span>, </span>}
              </>
            </span>
          );
        })}
      </p>
      <Outlet context={city} />
    </>
  );
};
