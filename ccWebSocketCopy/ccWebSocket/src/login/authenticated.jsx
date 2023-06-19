import React from 'react';
import { useNavigate } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';

import './login.css';
import './button.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <button className="btn btn-primary" onClick={() => navigate('/play')}>
        Play
      </button>
      <button className="btn btn-secondary" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}