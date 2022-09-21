import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from '../root.link';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(2);
  }, []);

  return (
    <section className=''>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className=' space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>{FRONT_PAGE_NAME}</h1>
        <p className='tracking-wide leading-relaxed'>
          {FRONT_PAGE_DESC}{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
