<script>
	import Tthree from './Tthree.svelte';

</script>

<svelte:head>
	<title>Michal Hicz</title>
	<meta name="description" content="Michal Hicz Portfolio" />
</svelte:head>

<section>
	
	<!--<div class="welcome">
		 <picture>
			<img src={logo} alt="" />
		</picture>
	</div>-->
	<div class="bounce">
	<div class="group">
	<div class="window">
		<div class="two">
			<div class="drac-box drac-bg-purple-cyan drac-rounded-lg drac-p-md profile">
				<center>
					<div class="head">
					
					<h2 style="font-weight: 500;" class="drac-heading drac-heading-2xl drac-text-black">Michal Hicz</h2>
					</div>
				</center>
			</div>
			<div class="drac-box drac-bg-black drac-rounded-lg drac-p-md desc">
				<p class="drac-text drac-line-height drac-text-purple-cyan">jakooo</p>
			</div>
		</div>
		<div class="drac-box drac-bg-black drac-rounded-lg drac-p-md info">
    		<p class="drac-text drac-line-height drac-text-purple-cyan">jakooo</p>
		</div>
	</div>
	<div style="height:0.5em"></div>
	</div>
		<div class="btns">
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Moj pribeh</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Projekty</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Purple Cyan</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Purple Cyan</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Kontakt</a>
	</div>
	</div>
	


</section>

<style>
	.head {
		
	}
	.bounce {
        animation-name: bounce;
        animation-timing-function: ease;
    }
    @keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
	.btns {
		overflow:visible;
		display: flex;
		justify-content: space-between!important;
		width: 62.95em;;
		margin-left:-1em;
	}
	.two {
		
	}
	.info {
		height: 24em;
		width: 35em;
		margin: 0em;
		border-radius: 10px;
		border-style: solid;
		border-width: 3px;
		border-color: #92ACF9;
		box-shadow: inset 0 0 25px 3px #16171d;
		box-shadow: 0 0 30px 1px #16171d;
	}
	.desc {
		width: 25em;
		height: 8em;
		margin-top: 1em;
		margin-bottom: 0em;
		margin-left: 0em;
		margin-right: 1em;
		border-radius: 10px;
		border-style: solid;
		border-width: 3px;
		border-color: #92ACF9;
		box-shadow: inset 0 0 25px 3px #16171d;
		box-shadow: 0 0 30px 1px #16171d;
	}
	.profile {
		width: 25em;
		height: 15em;
		margin-top: 0em;
		margin-bottom: 1em;
		margin-left: 0em;
		margin-right: 1em;
		border-radius: 10px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 30px 1px black;
	}
	.window {
		overflow:visible;
		display: flex;

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

	@media only screen and (max-width: 450px) {
		h1 {
			font-size: 3.5rem;
		}
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
</style>
