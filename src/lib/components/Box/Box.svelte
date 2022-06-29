<script lang="ts">
	// TODO: add ONMOUSE eventes

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	import BaseComponent from '../BaseComponent/BaseComponent.svelte';
	// types
	import type { Events, El, Sizes, Variant } from '../types';
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Types                                                   │
	// ╰──────────────────────────────────────────────────────────╯
	/* type Props = Events & El; */
	type Props = {
		addClass?: string;
		size?: Sizes;
		variant?: Variant;
		onHold?: boolean;
		disabled?: boolean;
	};

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Constants                                               │
	// ╰──────────────────────────────────────────────────────────╯
	const defClass = 'box';

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Exports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	export let props: Props = {};

	// values
	export let size: Props['size'] = props.size;
	export let addClass: Props['addClass'] = '';
	export let variant: Props['variant'] = props.variant;
	export let disabled: Props['disabled'] = props.disabled;

	// Events
	export let onHold: Props['onHold'] = props.onHold;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Functions                                               │
	// ╰──────────────────────────────────────────────────────────╯
	$: _class = `${defClass} ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
</script>

<BaseComponent _t="div" {_class} _hasSpinner={$$slots.spinner} {disabled} {variant} {size} {onHold}>
	<slot />

	<svelte:fragment slot="spinner">
		<slot name="spinner" />
	</svelte:fragment>
</BaseComponent>
