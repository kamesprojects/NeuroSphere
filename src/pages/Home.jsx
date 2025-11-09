import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo, useState } from 'react';
import Loader from '../components/Loader';
import SphereGuide from '../models/guide';
import Sky from '../models/sky';


// <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
//         POPUP
//       </div>
export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [robotPosition, robotDefaultScale, robotRotation] = useMemo(() => {
    const rotation = [0.1, 4.7, 0];
    const screenPosition = [0, 0, 0];
    const isClient = typeof window !== 'undefined';
    const isMobile = isClient && window.innerWidth < 768;
    const screenScale = isMobile ? [0.9, 0.9, 0.9] : [5.2, 5.2, 5.2];

    return [screenPosition, screenScale, rotation];
  }, []);

  const [robotScale, setRobotScale] = useState(robotDefaultScale);
  const scaleLimits = useMemo(() => {
    if (!robotDefaultScale) {
      return { min: [0.5, 0.5, 0.5], max: [6, 6, 6] };
    }

    const min = robotDefaultScale.map((value) => value * 0.6);
    const max = robotDefaultScale.map((value) => value * 1.6);
    return { min, max };
  }, [robotDefaultScale]);
  return (
    <div className="home-screen">
      <Canvas
        className={`home-canvas ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />} >
          <directionalLight  position={[1, 1, 1]} intensity={2}/>
          <ambientLight  intensity={2}/>
          <hemisphereLight  skyColor={0xb1e1ff} groundColor={0x000000} intensity={1}/>
          <Sky 
            isRotating={isRotating}
            position={[-20,-150, 100]}
            scale={[100, 100, 100]}
            rotation={[0, Math.PI / 4, 0]}
          />
          <SphereGuide 
            position={robotPosition}
            scale={robotScale}
            rotation={robotRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setScale={setRobotScale}
            scaleLimits={scaleLimits}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
