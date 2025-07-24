import React, { FC, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import CustomButton from '@shared/ui/CustomButton';
import { toggleTheme } from '@features/theme/themeConfig';

const ToggleThemeButton: FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem('theme'),
  );

  const handleThemeChange = () => {
    toggleTheme();
    setCurrentTheme(localStorage.getItem('theme'));
  };

  return (
    <CustomButton onClick={handleThemeChange} variant='neutral'>
      {currentTheme === 'light' ? <FiMoon /> : <FiSun />}
    </CustomButton>
  );
};

export default ToggleThemeButton;
