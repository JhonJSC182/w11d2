import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();

  return (
    <section>
      <div >
        <img  className='greenhouse-img'
              src={themeName === 'day' ? dayImage : nightImage}
              alt='greenhouse' 
        />
      </div>
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
