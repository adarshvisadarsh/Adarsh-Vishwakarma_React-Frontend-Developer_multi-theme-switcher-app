import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { setThemeKey, currentKey } = useThemeContext();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: '#333',
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div>
        <strong style={{ marginRight: '2rem' }}>🌀 Theme App</strong>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', marginRight: '1rem' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
      </div>

      <select
        value={currentKey}
        onChange={(e) => setThemeKey(e.target.value as any)}
        aria-label="Select Theme"
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;
