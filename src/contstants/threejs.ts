import type { PresetsType } from '@react-three/drei/helpers/environment-assets';

export interface DataConfig<T> {
  label: string;
  value: T;
}

export const gltfs: Array<DataConfig<string>> = [
  {
    label: 'Shiba',
    value: '/threejs/shiba/scene.gltf',
  },
  {
    label: 'Robo Shiba',
    value: '/threejs/robo_shiba/scene.gltf',
  },
  {
    label: 'Robo Boxy',
    value: '/threejs/robo_boxy/scene.gltf',
  },
  {
    label: 'Cute Bunny',
    value: '/threejs/cute_bunny/scene.gltf',
  },
  {
    label: 'Long Sword',
    value: '/threejs/longsword/scene.gltf',
  },
];

export const presets: Array<DataConfig<PresetsType>> = [
  {
    label: 'Sunset',
    value: 'sunset',
  },
  {
    label: 'Dawn',
    value: 'dawn',
  },
  {
    label: 'Night',
    value: 'night',
  },
  {
    label: 'Warehouse',
    value: 'warehouse',
  },
  {
    label: 'Forest',
    value: 'forest',
  },
  {
    label: 'Apartment',
    value: 'apartment',
  },
  {
    label: 'Studio',
    value: 'studio',
  },
  {
    label: 'City',
    value: 'city',
  },
  {
    label: 'Park',
    value: 'park',
  },
  {
    label: 'Lobby',
    value: 'lobby',
  },
];
