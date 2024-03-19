import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useState } from 'react';

function Greenhouse() {
  const [selectedTheme, setTheme] = useState();
  const { themeName, setThemeName } = useTheme();

  const handleClick = e => {
    e.stopPropagation();
 
    if (themeName === 'day') {
      setThemeName('night');
      e.target.src = nightImage;
    } else {
      setThemeName('day')
      e.target.src = dayImage;
    };
  };

  return (
    <section>
      <div onClick={handleClick}>
        <img  className='greenhouse-img'
              src={dayImage}
              alt='greenhouse' 
        />
      </div>
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
