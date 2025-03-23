'use client'

// layout => display => spacing => border => colors => text
import { useEffect } from 'react';
import NavBar from "./components/common/navbar";

export default function Home() {

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const eyes = document.querySelectorAll('.eye');

      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angleDeg = angle(mouseX, mouseY, eyeX, eyeY);

        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function angle(cx : any, cy : any, ex : any, ey : any) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }


  return (
    <>
      <NavBar />
      <section className="flex h-screen bg-primary-dark justify-center align-center m-auto pt-40 z-10">
        <div id="anchor" className="eyes absolute bottom-3.5  flex flex-row gap-3">
            <img src="/eye.png" className="eye relative size-5 mb-6 rounded-2xl" alt="" />
            <img src="/eye.png" className="eye relative size-5 mb-6 rounded-2xl" alt="" />
        </div>
      </section>

      <section className="h-[80vh] bg-primary-light">
      </section>

      <section className="h-[130vh] bg-primary-dark">
      </section>

      <section className="h-[80vh] bg-primary-light">
      </section>

      <section className="h-[120vh] bg-primary-dark-">
      </section>
    </>
  );
}
