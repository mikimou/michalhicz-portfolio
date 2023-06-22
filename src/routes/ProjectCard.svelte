<script>
    export const href = "";
    export const head = "";
    export const desc = "";
    export const button = "";

</script> 

<div class="drac-box drac-bg-purple-cyan drac-rounded-lg drac-p-md card">
    <h2 style="font-weight: 600; font-size: 2em;" class="drac-heading drac-text-black">{head}</h2>
    <div style="height: 1em;"></div>
    <p style="font-weight: 500;" class="drac-text drac-text-black drac-text-md">{desc}</p>
    <a href=href style="margin: 0;position:absolute; bottom:2em; color: #8BD2F2;" class="drac-btn drac-bg-black drac-text-grey-secondary drac-m-sm drac-btn-md">{button}</a>
</div>

<style>
    .card {
        width: 20em;
		height: 22em;
		margin: 3em;
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
        box-shadow: 0 0 40px 1px black;
    }
</style>