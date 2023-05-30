import React from 'react';
import ModelViewer from './component/ModelViewer';
import { Canvas } from 'react-three-fiber';
import InterFace from './component/Component/Interface';

const App = () => {
  return (
    <>
      <Canvas>
        <ModelViewer />
      </Canvas>
      <InterFace />
    </>
  );
};

export default App;