<script lang="ts">
	type Variant = 'primary' | 'default';
	type AddClass = string;
	type Checked = boolean;
	type Label = string;

	type Props = {
		variant?: Variant;
		addClass?: AddClass;
		checked?: Checked;
		label?: Label;
	};

	export let props: Props = { variant: 'default', checked: false };

	export let variant: Props['variant'] = props.variant;
	export let addClass: Props['addClass'] = '';
	export let checked: Props['checked'] = props.checked;
	export let label: Props['label'] = props.label;

	$: _class = `veniz veniz-checkbox  ${variant} ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
	/* class="pl-2 veniz-label cursor-default" */
</script>

<div name="radio" class="veniz-checkbox-wrapper">
	<input type="radio" class={_class} {checked} on:click />
	{#if $$slots.label}
		<slot name="label" />
	{:else if label}
		<span class="veniz-label" on:click={() => (checked = !checked)}>{label}</span>
	{/if}
</div>
