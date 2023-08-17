<script>
	import { goto } from '$app/navigation'

	async function keypresss(event) {
		if (event.key == 'y') {
			goto('/mystory');
		}
		if (event.key == 'Y') {

			goto('/mystory');
		}
	}
	
</script>

<svelte:head>
	<title>Michal Hicz</title>
	<meta name="description" content="Michal Hicz Portfolio" />
</svelte:head>

<svelte:window on:keydown={keypresss}/>

<section>
	<div class="bounce">
		<div class="group">
			<div class="window">
				<div class="two">
					<div class="drac-box drac-bg-purple-cyan drac-rounded-lg drac-p-md profile">
						<!--imageeeeee-->
						<center>
							<div class="head">
								<h2 style="font-weight: 500;" class="drac-heading drac-heading-2xl drac-text-black">Michal Hicz</h2>
							</div>
						</center>
					</div>
					<div class="drac-box drac-rounded-lg drac-p-md desc">
						<p style="margin: 0em;" class="drac-text drac-line-height drac-text-lg drac-text-purple-cyan">Passionate software developer, network enthusiast and automation freak.</p>
					</div>
				</div>
				<div class="two">
					<div class="drac-box drac-rounded-lg drac-p-md info">
						<h2 style="font-weight: 500;" class="drac-heading drac-heading-xl drac-text-purple-cyan">~$ ./skills.sh</h2>
						<br>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm">Javascript/Typescript... Advanced</p>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm">Python... Advanced</p>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm">Databases... Fundamentals</p>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm">API (REST/GraphQL)... Advanced</p>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm">Golang... Fundamentals</p>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm">Fixing stuff... Expert</p>
						<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-sm"><i>Show More? [<a href="/mystory">YES</a>/no] (Click on <a href="/mystory">YES</a> or type 'y')</i></p>
					</div>
				</div>
			</div>
			<div style="height: 2em;"></div>
		</div>
		<div class="btns">
			
				<a href="/mystory" class="drac-btn drac-bg-purple-cyan drac-m-sm btn aa">My story</a>
				<a href="/projects" class="drac-btn drac-bg-purple-cyan drac-m-sm btn aa">Projects</a>
				<a href="https://github.com/mikimou/" class="drac-btn drac-bg-purple-cyan drac-m-sm btn aa">GitHub</a>
				<a href="https://portal.michalhicz.eu/" class="drac-btn drac-bg-purple-cyan drac-m-sm btn aa">Portal</a>
				<a href="/settings" class="drac-btn drac-bg-purple-cyan drac-m-sm btn aa">Settings</a>
				<a href="/contact" class="drac-btn drac-bg-purple-cyan drac-m-sm btn aa">Contact</a>
			
		</div>
	</div>
</section>

<style>
	.head {
		
	}
	.btns {
		overflow:visible;
		display: flex;
		justify-content: space-between!important;
		padding: 1em;
		background-color: #1D1E26!important;
		border-radius:15px;
		border-style: solid;
		border-width: 0px;
		box-shadow: inset 0 0 15px 1px #0F0F16, 0 0 0px 0px #0a0a0e;
		transition: 250ms ease-in-out;
	}
	.btns:hover {
		box-shadow: inset 0 0 0px 0px #0F0F16, 0 0 20px 5px #0a0a0e;
	}
	.two {
		
	}
	.info {
		width: 35em;
		margin: 0em;
		height: 100%;
		border-radius: 10px;
		border-style: solid;
		border-width: 3px;
		border-color: #92ACF9;
		box-shadow: inset 0 0 25px 3px #16171d;
		box-shadow: 0 0 30px 1px #16171d;
		background-color: #16171d;
	}
	.desc {
		width: 25em;
		height: 9em;
		margin-top: 2em;
		margin-bottom: 0em;
		margin-left: 0em;
		margin-right: 2em;
		border-radius: 10px;
		border-style: solid;
		border-width: 0px;
		border-color: #92ACF9;
		box-shadow: inset 0 0 25px 3px #16171d;
		box-shadow: 0 0 30px 1px #16171d;
		background-color: #16171d;
	}
	.profile {
		width: 25em;
		height: 8em;
		margin-top: 2em;
		margin-bottom: 2em;
		margin-left: 0em;
		margin-right: 2em;
		border-radius: 20px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 30px 1px black;
	}
	.window {
		overflow:visible;
		display: flex;
		background-color: #1D1E26!important;
		padding: 2em;
		justify-content: center!important;
		border-radius: 20px;
		border-style: solid;
		border-width: 0px;
		box-shadow: inset 0 0 15px 1px #0F0F16, 0 0 0px 0px #0a0a0e;
		transition: 250ms ease-in-out;
	}
	.window:hover {
		box-shadow: inset 0 0 0px 0px #0F0F16, 0 0 20px 5px #0a0a0e;
	}
	@media only screen and (max-width: 1150px) {
        .window {
            width: 40em;
			display: block;
        }
		.btns {
			display: block;
		}
		.two {
			display: inline-block;
			text-align: center;
		}
		.group {
			display: block;
			text-align: center;
		}
		.desc {
			margin-bottom: 2em;
			margin-left: 2em;
		}
		.profile {
			margin-top: 0em;
			margin-left: 2em;
		}
		.info {
			text-align: left;
		}
		.bounce {
			margin-top: 6em;
			margin-bottom: 6em;
		}
    }
	@media only screen and (max-width: 1150px) {
        .window {
            width: 26em;
		}
		.info {
			width: auto;
		}
		.btns {
			width: 28em;
			display: grid;
			grid-template-columns: 9em 9em 9em;
			justify-content: center;
		}
		
		.profile {
			margin-bottom: 2em;
			margin-top: 0em;
			margin-left: 0em;
			margin-right: 0em;
			width: auto;
		}
		.desc {
			margin-bottom: 2em;
			margin-top: 0em;
			margin-left: 0em;
			margin-right: 0em;
			width: auto;
		}
    }
	.buttons {
		height: 8em;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 4rem;
	}
	.welcome {
		display: block;
		position: relative;
		padding: 0 0 0 0;
		align-items: center;
	}

	.welcome img {
		height: 8em;
		margin: auto;
		display: block;
		pointer-events: none;
	
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
