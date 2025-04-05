import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main>
        {/* Test Button to confirm Bootstrap styling */}
        <button className="btn btn-primary m-3">Test Button</button>
        
        {/* Render route content */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;
