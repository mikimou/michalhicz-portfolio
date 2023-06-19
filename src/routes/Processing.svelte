<script>
    import * as Threlte from '@threlte/core'
    import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
    import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
	import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';
    import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
    import { Vector2 } from 'three';


	const { size, renderer, scene, camera, invalidate, advance} = Threlte.useThrelte();

    let invert = false;
    let color = false;
    let resolution = 0.15;
    let characters = ' .:-+*=%@#'

    const effect = new AsciiEffect(renderer, characters, { invert, color, resolution })

   

</script>

<Threlte.Pass pass={new RenderPixelatedPass(100, scene, $camera)} />


<!--<Threlte.Pass pass={effect}/>-->

<style>
    html {
        
    }

</style>