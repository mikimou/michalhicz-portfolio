<script>
    import { fov, mouseReactivity, backLight, pixelation } from '../stores'

</script>

<svelte:head>
	<title>Michal Hicz Contact</title>
	<meta name="description" content="Michal Hicz Contact" />
</svelte:head>

<div class="sect">
    <div class="head">
        <center>
            <div style="display:flex; justify-content: center;">
            <h2 style="font-weight: 500;" class="drac-heading drac-heading-2xl drac-text-purple-cyan">Contact</h2>
            <a href="/" class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-sm">GO BACK</a>
            </div>
        </center>
    </div>
    <div class="body">
        <div class="window">
            <center>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">Email address:</p>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">michal07.h@gmail.com</p><br>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">Mobile number:</p>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">+421 910 405 579</p><br>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">Address:</p>
                <p class="drac-text drac-text-purple-cyan drac-text-sm">Horné Saliby 92503, Slovakia</p><br>
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