<script lang="ts">
	type Variant = 'primary' | 'default';
	type AddClass = string;

	type Props = {
		variant?: Variant;
		addClass?: AddClass;
	};

	export let props: Props = { variant: 'default' };

	export let variant: Props['variant'] = props.variant;
	export let addClass: Props['addClass'] = '';

	$: _class = `veniz veniz-input ${variant} ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
	/* class="pl-2 veniz-label cursor-default" */
</script>

<div class={_class} on:click>
	<slot />
</div>
