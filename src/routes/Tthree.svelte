<script>
	import * as Threlte from '@threlte/core'
	import * as Three from 'three'
	import * as Utils from 'three/src/math/MathUtils'
	import Scr from './scr.svelte';
	import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
	import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
	import { Pass, useThrelte, } from '@threlte/core';
	import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
	import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';

const { renderer, scene, camera } = useThrelte();


	const parameters = {
  		count: 100000,
  		size: 0.01,
  		radius: 5,
  		branches: 3,
  		spin: 1,
  		randomness: 0.2,
  		randomnessPower: 3,
  		insideColor: "#ff6030",
  		outsideColor: "#1b3984"
};

  </script>
  
  <div class="scene">
	<Threlte.Canvas>
	  <!-- Camera -->
	  <Threlte.PerspectiveCamera position={{ x: 20, y: 20, z: 20 }} fov={50}>
		<!-- Controls -->
		<Threlte.OrbitControls autoRotate />
	  </Threlte.PerspectiveCamera>
  
	  <!-- Lights the scene equally -->
	  <Threlte.AmbientLight color="white" intensity={0.2} />
  
	  <!-- Light that casts a shadow -->
	  <Threlte.DirectionalLight
		color="white"
		intensity={2}
		position={{ x: 10, y: 10 }}
		shadow={{
		  camera: { top: 8 },
		}}
	  />
  
	  <!-- Sphere -->
	  <Threlte.Mesh
		geometry={new Three.SphereGeometry(4, 64, 64)}
		material={new Three.MeshStandardMaterial({ color: 'white' })}
		position={{ y: 4 }}
		receiveShadow
		castShadow
	  />
  
	  <!-- Floor -->
	  <Threlte.Mesh
		geometry={new Three.PlaneGeometry(20, 20)}
		material={new Three.MeshStandardMaterial({
		  color: 'white',
		  side: Three.DoubleSide,
		})}
		rotation={{ x: Utils.DEG2RAD * 90 }}
		receiveShadow
	  />
	<Pass pass={new FilmPass(0.19, 0.2, 400, true)} />
	<Pass pass={new RenderPixelatedPass(20, scene, $camera)} />

	</Threlte.Canvas>
  </div>
  
  <style>
	.scene {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  z-index: -1;
	  background-color: #111217!important;
	}
  </style>
  