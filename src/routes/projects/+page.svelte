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
                <ProjectCard href={""} head={"Michal Hicz Portfolio"} desc={"Portfolio website coded in SvelteKit by me."} button={'Explore Project'}/>
                <ProjectCard href={""} head={"A.I. Lyrics Generator"} desc={"Website for generating lyrics based on typed topic made in SvelteKit."} button={'Explore Project'}/>
                <ProjectCard href={""} head={"E-learning website"} desc={"E-Learning website with content made for network education."} button={'Explore Project'}/>
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
        overflow: hidden;
        align-items: center;
        justify-content: center;
        
    }
    .card {
        width: 20em;
		height: 20em;
		margin: 4em;
		border-radius: 15px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 15px 1px black;
        float:left;
        display:inline;
        transition: 200ms ease-in-out;
        position: relative;
    }
    .card:hover {
        box-shadow: 0 0 30px 5px black;
    }
    .sect {
        display: block;
        margin-top: 2em;
    }
    .window {
		background-color: #1D1E26!important;
		padding: 2em;
        margin-top: 3em;
        margin-bottom: 3em;
        margin-left: 0em;
        margin-right: 0em;
		border-radius: 20px;
		border-style: solid;
		border-width: 0px;
        width: 56em;
		box-shadow: inset 0 0 15px 1px #0F0F16, 0 0 0px 0px #0a0a0e;
		transition: 250ms ease-in-out;
        
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