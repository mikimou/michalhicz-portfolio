<script>
	import * as Threlte from '@threlte/core'
	import * as Three from 'three'
	import * as Utils from 'three/src/math/MathUtils'
	import Processing from './Processing.svelte';
	import { mousex, mousey } from './stores';

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

	let mx = 0;
	let my = 0;

	mousex.subscribe((value) => mx = value);
	mousey.subscribe((value) => my = value);
  </script>
  
  <div class="scene">
	<Threlte.Canvas>
	  <!-- Camera -->
	  <Threlte.PerspectiveCamera position={{ x: 40+(my*0.01), y: 40-(mx*0.01), z: 30 }} fov={10}>
		<!-- Controls -->
		<Threlte.OrbitControls enableDamping autoRotate />
	  </Threlte.PerspectiveCamera>
  
	  <!-- Lights the scene equally -->
	  <Threlte.AmbientLight color="white" intensity={1} />
  
	  <!-- Light that casts a shadow -->
	  <Threlte.DirectionalLight
		color="white"
		intensity={2.85}
		position={{ x: 40, y: 40 }}
		
	  />
  
	  <!-- Floor -->
	  <Threlte.Mesh
		geometry={new Three.PlaneGeometry(20, 20)}
		material={new Three.MeshStandardMaterial({
		  color: '#1D1E26',
		  side: Three.DoubleSide,
		})}
		rotation={{ x: Utils.DEG2RAD * 90 }}
		receiveShadow
	  />
	  
	<Processing/>
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
  