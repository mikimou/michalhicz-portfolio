<script>
    import * as Threlte from '@threlte/core'

    function FrameLimiter({limit = 10}) {
    const {invalidate, clock, advance} = Threlte.useThrelte();

        let delta = 0;
        const interval = 1/limit;
        const update = () => {
            requestAnimationFrame(update);
            delta += clock.getDelta();

            if (delta > interval) {
                invalidate();
                delta = delta % interval;
            }
        }
        update();
    }
</script>

<Threlte.Pass pass={FrameLimiter(10)} />