import React from 'react';
import logo from './logo.svg';
import './App.css';
import backgroundImage from "./assets/background.jpg";
import obj1 from "./assets/obj_1.png";
import obj2 from "./assets/obj_2.png";
import obj3 from "./assets/obj_3.png";
import obj4 from "./assets/obj_4.png";
import Cube3D from './components/cube';

function App() {
  return (
    <div className='flex justify-center items-center bg-cyan-800 w-screen h-screen'>
      <Cube3D  slides={[
          { backgroundImage: backgroundImage, img: obj1 },
          { backgroundImage: backgroundImage, img: obj2 },
          { backgroundImage: backgroundImage, img: obj3 },
          { backgroundImage: backgroundImage, img: obj4 },
        ]}/>
    </div>
  );
}

export default App;
