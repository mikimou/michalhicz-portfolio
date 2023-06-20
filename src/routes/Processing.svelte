<script>
    import * as Threlte from '@threlte/core'
    import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
    import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
	import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';
    import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
    import { Vector2 } from 'three';
    import { screenWidth } from './stores'


	const { size, renderer, scene, camera, invalidate, advance} = Threlte.useThrelte();

</script>

<Threlte.Pass pass={new RenderPixelatedPass(85, scene, $camera)} />

<style>
    html {
        
    }

</style>