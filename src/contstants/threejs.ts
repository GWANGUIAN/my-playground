import type { PresetsType } from '@react-three/drei/helpers/environment-assets';

interface DataConfig<T> {
  name: string;
  data: T;
}

export const gltfs: Array<DataConfig<string>> = [
  {
    name: 'Shiba',
    data: '/threejs/shiba/scene.gltf',
  },
  {
    name: 'Robo Shiba',
    data: '/threejs/robo_shiba/scene.gltf',
  },
  {
    name: 'Robo Boxy',
    data: '/threejs/robo_boxy/scene.gltf',
  },
  {
    name: 'Cute Bunny',
    data: '/threejs/cute_bunny/scene.gltf',
  },
  {
    name: 'Long Sword',
    data: '/threejs/longsword/scene.gltf',
  },
];

export const presets: Array<DataConfig<PresetsType | undefined>> = [
  {
    name: 'None',
    data: undefined,
  },
  {
    name: 'Sunset',
    data: 'sunset',
  },
  {
    name: 'Dawn',
    data: 'dawn',
  },
  {
    name: 'Night',
    data: 'night',
  },
  {
    name: 'Warehouse',
    data: 'warehouse',
  },
  {
    name: 'Forest',
    data: 'forest',
  },
  {
    name: 'Apartment',
    data: 'apartment',
  },
  {
    name: 'Studio',
    data: 'studio',
  },
  {
    name: 'City',
    data: 'city',
  },
  {
    name: 'Park',
    data: 'park',
  },
  {
    name: 'Lobby',
    data: 'lobby',
  },
];
