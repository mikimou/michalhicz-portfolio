<script>
	import * as Threlte from '@threlte/core'
	import * as Three from 'three'
	import * as Utils from 'three/src/math/MathUtils'
	import Processing from './Processing.svelte';
	import { mousex, mousey, fov, mouseReactivity, backLight, pixelation } from './stores';

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
  
{#key $pixelation}
	<div class="scene">
		{#if $mouseReactivity}
			<Threlte.Canvas frameloop="demand">
				<Threlte.PerspectiveCamera position={{ x: 40+($mousey*0.01), y: 40-($mousex*0.01), z: 30 }} fov={$fov}>
					<Threlte.OrbitControls enableDamping autoRotate />
				</Threlte.PerspectiveCamera>
		
				<Threlte.AmbientLight color="white" intensity={1} />
		
				<Threlte.DirectionalLight
					color="white"
					intensity={$backLight}
					position={{ x: 40, y: 40 }}	/>
		
				<Threlte.Mesh
					geometry={new Three.PlaneGeometry(20, 20)}
					material={new Three.MeshStandardMaterial({
					color: '#1D1E26',
					side: Three.DoubleSide,
					})}
					rotation={{ x: Utils.DEG2RAD * 90 }}
					receiveShadow/>
				
				<Processing/>

			</Threlte.Canvas>
		{:else}
			<Threlte.Canvas frameloop="demand">
				<Threlte.PerspectiveCamera position={{ x: 40, y: 40, z: 30 }} fov={$fov}>
					<Threlte.OrbitControls enableDamping autoRotate />
				</Threlte.PerspectiveCamera>
	
				<Threlte.AmbientLight color="white" intensity={1} />

				<Threlte.Mesh
					geometry={new Three.PlaneGeometry(20, 20)}
					material={new Three.MeshStandardMaterial({
						color: '#1D1E26',
						side: Three.DoubleSide,
					})}
					rotation={{ x: Utils.DEG2RAD * 90 }}
					receiveShadow/>
				
				<Processing/>
  
	  		</Threlte.Canvas>
		{/if}
  	</div>
{/key}
  
<style>
	.scene {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -1;
		background-color: #111217!important;
	}
</style>
  