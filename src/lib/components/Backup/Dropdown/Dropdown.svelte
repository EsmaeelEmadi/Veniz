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
	type item = { label: string; key: number };
	type Props = Events & El & { items: item[] };

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Inner States                                            │
	// ╰──────────────────────────────────────────────────────────╯
	export let showOptions: boolean = false;
	const defaultClick = () => (showOptions = !showOptions);
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Exports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	export let props: Props = { items: [] };

	// values
	export let value: Props['value'] = props.value;
	export let size: Props['size'] = props.size;
	export let addClass: Props['addClass'] = '';
	export let variant: Props['variant'] = props.variant;
	export let disabled: Props['disabled'] = props.disabled;
	export let items: Props['items'] = props.items;

	// Events
	export let onHold: Props['onHold'] = props.onHold;
	// // mouse
	export let onClick: Props['onClick'] = props.onClick || defaultClick;
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
	$: _class = `veniz-dropdown ${addClass ?? ''} ${props.addClass ?? ''}`.trim();
</script>

<BaseComponent
	_t="button"
	_type="dropdown"
	{_class}
	_hasSpinner={$$slots.spinner}
	_hasTooltip={$$slots.tooltip}
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
</BaseComponent>
<div class:invisible={!showOptions}>
	<ul aria-labelledby="dropdownDefault">
		{#each items as item}
			<li>
				<a href="#">{item.label}</a>
			</li>
		{/each}
	</ul>
</div>
