import { useState } from "react";
import Flowers from '../assets/img/logosc.png'

const AnimationLogo = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  return (
    <div className='rounded-full sm:ml-[100px] '>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        style={{
          position: 'relative',
          width: '180px',
          height: '200px',
        }}
      >
        <img
          className={`rounded-full m-2 ${hovered ? 'opacity-0 ' : 'opacity-50'
            }`}
          src={Flowers}
          alt="Flowers"
        />
        <p
          className={`rounded-full absolute top-0 left-0 w-full h-full  text-6xl font-bold flex justify-center items-center ${hovered ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            transform: hovered
              ? 'translate3d(10px, 10px, 0) scale(0.5)'
              : 'none',
            transition: 'transform 3s',
            color: hovered ? 'rgb(200, 180, 250) ' : 'white',
          }}
        >
          Nice Day!
        </p>
      </div>
    </div>
  );
};

export default AnimationLogo;