<script lang="ts">
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports│
	// ╰──────────────────────────────────────────────────────────╯
	import type { Tags, Variant, ButtonEventHandler } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ Exports                                                  │
	// ╰──────────────────────────────────────────────────────────╯
	// Values
	export let _t: Tags;
	export let _class: string = '';
	export let value: string = undefined;
	export let variant: Variant = 'secondary';
	// Events
	export let onClick: ButtonEventHandler = undefined;
	export let onDBClick: ButtonEventHandler = undefined;
	export let onMouseOver: ButtonEventHandler = undefined;
	export let onMouseEnter: ButtonEventHandler = undefined;
	export let onMouseLeave: ButtonEventHandler = undefined;
	export let onMouseMove: ButtonEventHandler = undefined;
	export let onFocus: ButtonEventHandler = undefined;
	export let onContextMenu: ButtonEventHandler = undefined;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Functions                                               │
	// ╰──────────────────────────────────────────────────────────╯
	$: _c = `
		${_class}
		${variant}
	`;
</script>

<svelte:element
	this={_t}
	class={_c}
	on:click={onClick}
	on:dblclick={onDBClick}
	on:mouseover={onMouseOver}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
	on:mousemove={onMouseMove}
	on:focus={onFocus}
	on:contextmenu={onContextMenu}>{value}</svelte:element
>
