import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width)/2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - var(--toggle-padding) * 2);
  height: calc(var(--toggle-height) - var(--toggle-padding) * 2);
  border-radius: 50%;
  background: #fff;
  transform: ${(p) => 
    p.activeTheme === 'dark'
      ? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)'
      : 'none'};
  transition: transform 0.25s ease-in-out;
`;

export default function ThemeToggler() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  // useEffect(() => {
  //   const savedTheme = window.localStorage.getItem('theme');
  //   savedTheme && setActiveTheme(savedTheme);
  // }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type='button'
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>☀️</span>
      <span aria-hidden={true}>🌙</span>
    </ToggleButton>
  );
};