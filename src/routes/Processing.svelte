<script>
    import * as Threlte from '@threlte/core'
	import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';
    import { pixelation } from './stores'

	const { scene, camera } = Threlte.useThrelte();

</script>

<Threlte.Pass pass={new RenderPixelatedPass($pixelation, scene, $camera)} />

<style>

</style>