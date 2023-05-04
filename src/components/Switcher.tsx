import useDark from '../hooks/useDark';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Swithcher = () => {
  const [colorTheme, setTheme] = useDark();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div className='m-16  flex flex-col item-center align-middle'>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={40}
        />
      </div>
    </>
  );
};

export default Swithcher;
