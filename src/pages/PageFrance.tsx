import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export const PageFrance = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>France Info Site</title>
      </Helmet>
      <p>Welcome to the France page.</p>
      <p>
        France is a unitary semi-presidential republic with its capital in
        Paris, the country's largest city and main cultural and commercial
        centre; other major urban.
      </p>
      <button onClick={() => navigate('/germany/hannover')}>
        AD: Visit Hannover
      </button>
    </>
  );
};
