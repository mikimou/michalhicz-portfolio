<script>
    import * as Threlte from '@threlte/core'
    import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
    import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
	import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';

	const { size, renderer, scene, camera, invalidate, advance} = Threlte.useThrelte();

    let invert = false;
    let color = false;
    let resolution = 0.15;
    let characters = ' .:-+*=%@#'

    const effect = new AsciiEffect(renderer, characters, { invert, color, resolution })

   

</script>

<!--<Threlte.Pass pass={new RenderPixelatedPass(20, scene, $camera)} />-->
<!--<Threlte.Pass pass={new FilmPass(0.19, 0.2, 400, 1)} />-->
<!--<Threlte.Pass pass={effect}/>-->

<style>
    html {
        
    }

</style>