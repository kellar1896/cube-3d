import React, { DragEvent, useEffect, useRef, useState } from "react";
import "./cube.scss";

type slidesType = {
  backgroundImage: string;
  img: string;
  key?: number | string;
}[];

const Cube3D = ({ slides }: { slides: slidesType }) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [angleToRotate, setAngleToRotate] = useState(0);
  const [velocity, setVelocity] = useState(0);

  let lastMouseX = 0;
  let lastTimestamp = 0;

  const handleMouseMove = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.clientX === 0) return;
    const currentTime = Date.now();
    const deltaX = e.clientX - lastMouseX;
    const deltaT = currentTime - lastTimestamp;
    setVelocity(deltaX / deltaT);
    setAngleToRotate(e.clientX);
    lastMouseX = e.clientX;
    lastTimestamp = currentTime;
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const timer = setInterval(() => {
      setAngleToRotate((prevAngle) => {
        const newAngle = prevAngle * 0.95 - velocity * 4;
        return Math.round(newAngle * 100) / 100;
      });
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
    }, 2000);
  };


  return (
    <div className="cube3d__principal_container" draggable>
      <div
        className="cube3d__swipe_container"
        ref={swiperRef}
        onDrag={handleMouseMove}
        onDragEnd={handleDragEnd}
        style={{
          transform: `rotateY(${angleToRotate}deg`
        }}
      >
        {slides.map((slide, index) => {
          return (
            <div className="cube3d__slide_container" key={index} tabIndex={-1}>
              <img
                src={slide.backgroundImage}
                className="cube3d__background_image"
                alt=""
                tabIndex={-1}
              />
              <img
                src={slide.img}
                alt="slide"
                className="cube3d__floating_image"
                tabIndex={-1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cube3D;
