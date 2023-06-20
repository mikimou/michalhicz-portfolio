import { writable } from 'svelte/store';

export const mousex = writable(0);
export const mousey = writable(0);
export const screenWidth = writable(0);

/* Settings */
export const graphicsToggle = writable(false);
export const fov = writable(9);
export const scale = writable(0);
export const theme = writable("");
