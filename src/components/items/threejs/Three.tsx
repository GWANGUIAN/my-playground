/* eslint-disable unicorn/no-null */
import { css } from '@emotion/react';
import { Environment, OrbitControls } from '@react-three/drei';
import type { PresetsType } from '@react-three/drei/helpers/environment-assets';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import type { DataConfig } from '../../../contstants/threejs';
import { gltfs, presets } from '../../../contstants/threejs';
import { responsivePadding } from '../../../styles/common';
import SelectBox from './SelectBox';

const container = css`
  position: relative;
  height: calc(100vh - 56px);
  @media (max-width: 1023px) {
  }
`;

const selectContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  ${responsivePadding(20, 20, 20, 20)}
  gap: 10px;
  z-index: 100;
`;

interface ModelProps {
  gltfPath: string;
}

const Model = ({ gltfPath }: ModelProps) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return (
    <>
      <primitive object={gltf.scene} scale={3} />
    </>
  );
};

const Three = () => {
  const [gltf, setGltf] = useState<DataConfig<string>>(gltfs[0]);
  const [preset, setPreset] = useState<DataConfig<PresetsType>>(presets[0]);

  return (
    <div css={container}>
      <div css={selectContainer}>
        <SelectBox
          title="3D Models"
          value={gltf}
          onChange={setGltf}
          options={gltfs}
        />
        <SelectBox
          title="Background"
          value={preset}
          onChange={setPreset}
          options={presets}
        />
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <Model gltfPath={gltf.value} />
          <OrbitControls />
          {preset.value && <Environment preset={preset.value} background />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Three;
