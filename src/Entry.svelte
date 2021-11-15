<script>
	export let contents;
	export let title = "Untitled";
	title = title.toUpperCase();
	export let src;
</script>

<main>
	<h1>{title}</h1>
	<p> {contents} </p>
	<img {src}>
</main>
