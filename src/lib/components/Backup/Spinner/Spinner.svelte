<script lang="ts">
	// ╭──────────────────────────────────────────────────────────╮
	// │ Imports                                                  │
	// ╰──────────────────────────────────────────────────────────╯
	/* import BaseComponent from '../BaseComponent/BaseComponent.svelte'; */
	// types
	import type { Events, El } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Types                                                   │
	// ╰──────────────────────────────────────────────────────────╯
	type Props = Events & El;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Exports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	export let props: Props = {};

	// values
	/* export let value: Props['value'] = props.value; */ // TODO: Remove Value from props
	export let addClass: Props['addClass'] = '';
	export let variant: Props['variant'] = props.variant ?? 'secondary';
	/* export let disabled: Props['disabled'] = props.disabled; */
	export let fill = 'none'; // TODO: Add it to props
	export let size = null;
	export let style: any = null;
	// TODO: rethink about all the properties

	// Events
	// // mouse

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Functions                                               │
	// ╰──────────────────────────────────────────────────────────╯
	$: _class = `
		${addClass ?? ''} 
		${props.addClass ?? ''}
		h-10
		animate-spin
		text
		`.trim();
	$: _classCircle = `el bg-white stroke-${variant}-200 opacity-25`.trim();

	$: _classPath = `
			el
			fill-white
			fill-${variant}-800
			`.trim();

	/* {disabled} */
	/* {variant} */
	/* {onClick} */
	/* {onDBClick} */
	/* {onMouseOver} */
	/* {onMouseEnter} */
	/* {onMouseLeave} */
	/* {onMouseMove} */
	/* {onFocus} */
	/* {onContextMenu} */
</script>

<svg
	{fill}
	class={`${_class} `}
	{style}
	width={size}
	height={size}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
>
	<circle class={_classCircle} cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
	<path
		class={_classPath}
		d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
	/>
</svg>
