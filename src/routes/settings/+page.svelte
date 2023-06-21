<script>
    import { goto } from '$app/navigation'
    import { fov, mouseReactivity, backLight, pixelation } from '../stores'

</script>

<svelte:head>
	<title>Michal Hicz Settings</title>
	<meta name="description" content="Michal Hicz Settings" />
</svelte:head>

<div class="sect">
    <div class="head">
        <center>
            <div style="display:flex; justify-content: center;">
            <h2 style="font-weight: 500;" class="drac-heading drac-heading-2xl drac-text-purple-cyan">Settings</h2>
            <button on:click={() => goto('/')} class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-sm">GO BACK</button>
            </div>
        </center>
    </div>
    <div class="body">
        <div class="window">
            <center>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">Toggle graphics in the top left corner</p>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">Reload page to reset settings</p><br>
                <input type="checkbox" bind:checked={$mouseReactivity} id="mouse" class="drac-checkbox drac-checkbox-purple"/>
                <label for="normal" class="drac-text drac-text-purple-cyan">Background mouse reactivity</label><br><br><br>
                <h2 class="drac-heading drac-text-purple-cyan drac-heading-lg">Background FOV:</h2><br>
                <input type="number" bind:value={$fov} style="width: 6em;" placeholder="" class="drac-input drac-input-white drac-text-white drac-input-border-sm"/><br><br>
                <h2 class="drac-heading drac-text-purple-cyan drac-heading-lg">Background light:</h2><br>
                <input type="number" bind:value={$backLight} style="width: 6em;" placeholder="" class="drac-input drac-input-white drac-text-white drac-input-border-sm"/><br><br>
                <h2 class="drac-heading drac-text-purple-cyan drac-heading-lg">Background Pixelation:</h2><br>
                <input type="number" bind:value={$pixelation} style="width: 6em;" placeholder="" class="drac-input drac-input-white drac-text-white drac-input-border-sm"/><br>
            </center>
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
        width: 25em;
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