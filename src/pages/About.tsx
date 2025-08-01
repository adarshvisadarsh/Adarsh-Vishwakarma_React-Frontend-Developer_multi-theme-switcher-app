import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const About = () => {
  const { theme } = useThemeContext();

  return (
    <div style={{ paddingTop: '5rem', fontFamily: theme.font }}>
      <h2>About Us - {theme.name}</h2>
      <p>This is a themed application.</p>
    </div>
  );
};

export default About;
