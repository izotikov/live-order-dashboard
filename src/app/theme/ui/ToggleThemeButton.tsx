import React, { FC, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { toggleTheme } from '@app/theme/model/themeConfig';
import { CustomButton } from '@shared/ui/CustomButton';

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
