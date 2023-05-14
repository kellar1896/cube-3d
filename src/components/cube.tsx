import React, { DragEvent, useEffect, useRef, useState } from "react";
import "./cube.scss";

type slidesType = {
  backgroundImage: string;
  img: string;
  key?: number | string;
}[];

const Cube3D = ({ slides }: { slides: slidesType }) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  


  return (
    <div className="cube3d__principal_container" draggable>
      <div
        className="cube3d__swipe_container"
        ref={swiperRef}
        // onDrag={handleMouseMove}
        // onDragEnd={handleDragEnd}
        // style={{
        //   transform: `rotateY(${angleToRotate}deg`
        // }}
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
