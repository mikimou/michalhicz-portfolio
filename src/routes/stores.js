import { writable } from 'svelte/store';

export const mousex = writable(0);
export const mousey = writable(0);
export const screenWidth = writable(0);

/* Settings */
export const graphicsToggle = writable(true);
export const fov = writable(9);
export const scale = writable(0);
export const theme = writable("");
export const mouseReactivity = writable(true);
export const backLight = writable(2.7);
export const pixelation = writable(80);