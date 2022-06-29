<script lang="ts">
	import Spinner from '../Spinner/Spinner.svelte';

	export let onHold: boolean = false;
	console.log({ onHold });
</script>

<div disabled={onHold}>
	<slot />
</div>
