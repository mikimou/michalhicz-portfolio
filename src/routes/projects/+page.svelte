<script>
    import ProjectCard from '../ProjectCard.svelte'

</script>

<svelte:head>
	<title>Michal Hicz Projects</title>
	<meta name="description" content="Michal Hicz Projects" />
</svelte:head>

<div class="sect">
    <div class="head">
        <center>
            <div style="display:flex; justify-content: center;">
                <h2 style="font-weight: 500;" class="drac-heading drac-heading-2xl drac-text-purple-cyan">Projects</h2>
                <a href="/" class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-sm">GO BACK</a>
            </div>
        </center>
    </div>
    <div class="body">
        <div class="window">
            <div class="content">
                <ProjectCard href="https://sietovevzdelanie.eu/" head={"E-learning website"} desc={"E-Learning website with content primarily aimed for network education."} button={'Explore website'}/>
                <ProjectCard href={"https://github.com/mikimou/michalhicz-portfolio/"} head={"Michal Hicz Portfolio"} desc={"Portfolio website made with SvelteKit and 3D library Three.js."} button={'Explore on GitHub'}/>
                <ProjectCard href={"https://lyrics.michalhicz.eu/"} head={"A.I. Lyrics Generator"} desc={"Website for generating lyrics based on typed topic made with SvelteKit, Webhooks and n8n backend."} button={'Explore website'}/>
            </div>
        </div>
    </div>
</div>

<style>
    .body {
        display: flex;
        justify-content: center;
    }
    .head {
        
    }
    .content {
        min-height: 20em;
        width: 78em;
        overflow: hidden;
        align-items: center;
        justify-content: center;
    }
    .sect {
        display: block;
        margin-top: 2em;
    }
    .window {
		background-color: #1D1E26!important;
        margin-top: 3em;
        margin-bottom: 3em;
        margin-left: 0em;
        margin-right: 0em;
		border-radius: 20px;
		border-style: solid;
		border-width: 0px;
		box-shadow: inset 0 0 15px 1px #0F0F16, 0 0 0px 0px #0a0a0e;
		transition: 250ms ease-in-out;
	}
    @media only screen and (max-width: 1400px) {
        .content {
            width: 52em;
        }

    }
    @media only screen and (max-width: 950px) {
        .content {
            width: 26em;
        }

    }
	.window:hover {
		box-shadow: inset 0 0 0px 0px #0F0F16, 0 0 20px 5px #0a0a0e;
	}
    a { 
		text-decoration: none!important;
	}
	.aa:hover {
		box-shadow: 0 0 0px 0px black;
	}
	.aa {
		font-weight: 500;
		box-shadow: 0 0 10px 1px black;
		transition: 200ms ease-in-out;
	}
</style>