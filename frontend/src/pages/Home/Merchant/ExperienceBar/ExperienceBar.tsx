import { useState } from 'react';
import './ExperienceBar.css';

type Props = {
  progress: {
    curr: number;
    max: number;
  };
};

const ExperienceBar = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='exp-bar items-center flex' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className='exp-fill w-full text-center text-white' style={{ width: `${props.progress.curr}%` }}>
        {isHovering && `${props.progress.curr}/${props.progress.max}`}
      </div>
    </div>
  );
};

export default ExperienceBar;
