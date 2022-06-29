const sizes = ['sm', 'base', 'lg', 'xl'] as const;

export type Sizes = typeof sizes[number];
