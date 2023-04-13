import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center flex-column justify-content-center" style={{ height: '100vh' }}>
      <h1 className="display-1 fw-extrabold" style={{ fontSize: '10rem', fontWeight: '700' }}>Oops!</h1>
      <p className="fw-bold" style={{ fontSize: '2rem' }}>404 - PAGE NOT FOUND</p>
      <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default NotFoundPage;
