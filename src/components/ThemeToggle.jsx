import { useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={toggle} aria-label="Toggle dark mode">
      {dark ? 'Light' : 'Dark'} mode
    </button>
  );
}
