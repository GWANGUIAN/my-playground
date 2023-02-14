/* eslint-disable unicorn/no-null */
import { css } from '@emotion/react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const container = css`
  height: calc(100vh - 56px);
  @media (max-width: 1023px) {
  }
`;

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/threejs/shiba/scene.gltf');

  return (
    <>
      <primitive object={gltf.scene} scale={3} />
    </>
  );
};

const Three = () => (
  <div css={container}>
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  </div>
);

export default Three;
