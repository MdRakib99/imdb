'use client';
import { MdLightMode } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';
import React from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className="text-xl cursor-pointer hover:text-amber-500">
      {currentTheme === 'dark' ? (
        <MdLightMode onClick={() => setTheme('light')} />
      ) : (
        <BsMoonStarsFill onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}
