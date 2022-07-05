<script lang="ts">
	/* <input type="button"> */
	/* <input type="checkbox"> */
	/* <input type="color"> */
	/* <input type="date"> */
	/* <input type="datetime-local"> */
	/* <input type="file"> */
	/* <input type="hidden"> */
	/* <input type="image"> */
	/* <input type="month"> */
	/* <input type="radio"> */
	/* <input type="range"> */
	/* <input type="reset"> */
	/* <input type="search"> */
	/* <input type="submit"> */
	/* <input type="tel"> */
	/* <input type="time"> */
	/* <input type="url"> */
	/* <input type="week"> */

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	import BaseComponent from '../BaseComponent/BaseComponent.svelte';
	// types
	import type { Events, El } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Types                                                   │
	// ╰──────────────────────────────────────────────────────────╯
	type Props = Events & El & { label?: string };

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Exports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	export let props: Props = {};

	// values
	export let value: Props['value'] = props.value;
	export let size: Props['size'] = props.size;
	export let addClass: Props['addClass'] = '';
	export let variant: Props['variant'] = props.variant;
	export let disabled: Props['disabled'] = props.disabled;
	export let label: Props['label'] = props.label;

	// Events
	export let onHold: Props['onHold'] = props.onHold;
	// // mouse
	export let onClick: Props['onClick'] = props.onClick;
	export let onDBClick: Props['onDBClick'] = props.onDBClick;
	export let onMouseOver: Props['onMouseOver'] = props.onMouseOver;
	export let onMouseEnter: Props['onMouseEnter'] = props.onMouseEnter;
	export let onMouseLeave: Props['onMouseLeave'] = props.onMouseLeave;
	export let onMouseMove: Props['onMouseMove'] = props.onMouseMove;
	export let onFocus: Props['onFocus'] = props.onMouseMove;
	export let onContextMenu: Props['onContextMenu'] = props.onContextMenu;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Functions                                               │
	// ╰──────────────────────────────────────────────────────────╯
	$: _class = `veniz-input ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
</script>

<BaseComponent
	_t="input"
	{_class}
	_hasSpinner={$$slots.spinner}
	_hasTooltip={$$slots.tooltip}
	_hasLabel={$$slots.label}
	{disabled}
	{label}
	{variant}
	{size}
	{onHold}
	{onClick}
	{onDBClick}
	{onMouseOver}
	{onMouseEnter}
	{onMouseLeave}
	{onMouseMove}
	{onFocus}
	{onContextMenu}
>
	<slot>{value}</slot>

	<svelte:fragment slot="tooltip">
		<slot name="tooltip" />
	</svelte:fragment>

	<svelte:fragment slot="spinner">
		<slot name="spinner" />
	</svelte:fragment>

	<svelte:fragment slot="label">
		<slot name="label" />
	</svelte:fragment>
</BaseComponent>
