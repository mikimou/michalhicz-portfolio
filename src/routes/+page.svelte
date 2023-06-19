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
			<div class="drac-box drac-rounded-lg drac-p-md desc">
				<p class="drac-text drac-line-height drac-text-purple-cyan drac-text-lg">jakooo</p>
			</div>
		</div>
		<div class="two">
			
		<div class="drac-box drac-rounded-lg drac-p-md info">
    		<h2 style="font-weight: 500;" class="drac-heading drac-heading-xl drac-text-purple-cyan">:~$ ./skills.sh</h2>
		</div>
		</div>
	</div>
	<div style="height: 2em;"></div>
	</div>
		<div class="btns">
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">My story</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Projects</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Portal</a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn"></a>
			<a class="drac-btn drac-bg-purple-cyan drac-m-sm btn">Contact</a>
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
		padding: 1em;
		background-color: #1D1E26!important;
		border-radius:10px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 30px 5px black;
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
		flex-flow: column;
		display: flex;
		background-color: #16171d;
	}
	.desc {
		width: 25em;
		height: 8em;
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
		height: 14em;
		margin-top: 0em;
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
		border-radius: 15px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 30px 5px black;

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
		font-weight: 500;
	}
</style>
