import { Theme } from '../types/theme';

export const themes: Record<string, Theme> = {
  theme1: {
    name: 'Light Minimal',
    background: '#ffffff',
    color: '#111111',
    font: 'Arial, sans-serif',
    layout: 'centered'
  },
  theme2: {
    name: 'Dark Sidebar',
    background: '#1f1f1f',
    color: '#f0f0f0',
    font: '"Times New Roman", serif',
    layout: 'sidebar'
  },
  theme3: {
    name: 'Colorful Cards',
    background: '#fff0f6',
    color: '#d63384',
    font: '"Pacifico", cursive',
    layout: 'cards'
  }
};
