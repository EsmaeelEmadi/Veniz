<script lang="ts">
	type Type = 'text' | 'number';
	type Variant = 'primary' | 'default';
	type AddClass = string;
	type Value = string;
	type Checked = boolean;
	type Label = string;

	type Props = {
		type?: Type;
		variant?: Variant;
		addClass?: AddClass;
		value?: Value;
		checked?: Checked;
		label?: Label;
	};

	export let props: Props = { type: 'text', variant: 'default', checked: false };

	export let variant: Props['variant'] = props.variant;
	export let value: Props['value'] = props.value;
	export let addClass: Props['addClass'] = '';
	export let checked: Props['checked'] = props.checked;
	export let label: Props['label'] = props.label;
	export let _type: Props['type'] = props.type;

	$: _class = `veniz veniz-input ${variant} ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
	/* class="pl-2 veniz-label cursor-default" */
</script>

{#if $$slots.label}
	<slot name="label" />
{:else if label}
	<span class="veniz-label" on:click={() => (checked = !checked)}>{label}</span>
{/if}
<div name="input" class="veniz-input-wrapper">
	<input type={_type} {value} class={_class} {checked} on:click />
</div>
