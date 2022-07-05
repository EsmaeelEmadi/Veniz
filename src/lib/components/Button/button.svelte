<script lang="ts">
	type Type = 'submit' | 'button';
	type Variant = 'primary' | 'default';
	type AddClass = string;
	type Value = string;

	type Props = { type?: Type; variant?: Variant; addClass?: AddClass; value?: Value };

	export let props: Props = { type: 'button', variant: 'default' };

	export let _type: Props['type'] = 'button';
	export let value: Props['value'] = props.value;
	export let variant: Props['variant'] = props.variant;
	export let addClass: Props['addClass'] = '';

	$: _class = `veniz veniz-button ${variant} ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
</script>

<button class={_class} type={_type} on:click>
	<slot>{value}</slot>
</button>
