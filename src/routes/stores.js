import { writable } from 'svelte/store';

export const mousex = writable(0);
export const mousey = writable(0);

export const graphicsToggle = writable(true);
export const screenWidth = writable(0);
export const fov = writable(9);