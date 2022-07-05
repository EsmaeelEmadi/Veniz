<script lang="ts">
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	import BaseComponent from '../BaseComponent/BaseComponent.svelte';
	// types
	import type { Events, El } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Types                                                   │
	// ╰──────────────────────────────────────────────────────────╯
	type Props = Events & El & { label?: string; checked?: boolean };

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Exports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	export let props: Props = {};

	// values
	export let value: Props['value'] = props.value;
	export let size: Props['size'] = props.size;
	export let addClass: Props['addClass'] = props.addClass;
	export let variant: Props['variant'] = props.variant;
	export let disabled: Props['disabled'] = props.disabled;
	export let label: Props['label'] = props.label;
	export let checked: Props['checked'] = props.checked;

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
	$: _class = `${addClass ?? ''} ${props.addClass ?? ''}`.trim();
</script>

<BaseComponent
	_t="input"
	_type="checkbox"
	{checked}
	{_class}
	_hasSpinner={$$slots.spinner}
	_hasTooltip={$$slots.tooltip}
	{label}
	{disabled}
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
