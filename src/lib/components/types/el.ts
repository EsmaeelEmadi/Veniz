import type { Sizes } from './sizes';

export type Variant = 'primary' | 'secondary' | '';

export type El = {
	value?: string;
	variant?: Variant;
	addClass?: string;
	disabled?: boolean;
	onHold?: boolean;
	size?: Sizes;
};
