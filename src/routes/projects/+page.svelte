<script>
    import { goto } from '$app/navigation'
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
            <button on:click={() => goto('/')} class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-sm">GO BACK</button>
            </div>
        </center>
    </div>
    <div class="body">
        <div class="window">
            
            <div class="content">
                <ProjectCard href={""} head={"Michal Hicz Portfolio"} desc={"Portfolio website made with SvelteKit and Three.js."} button={'Explore Project'}/>
                <ProjectCard href={""} head={"A.I. Lyrics Generator"} desc={"Website for generating lyrics based on typed topic made with SvelteKit and Webhooks."} button={'Explore Project'}/>
                <ProjectCard href={""} head={"E-learning website"} desc={"E-Learning website with content primarily aimed for network education."} button={'Explore Project'}/>
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
		text-decoration: none!important;;
		color: #21222C!important;
		
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