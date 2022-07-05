const tags = ['button', 'input', 'div', 'svg'] as const;

export type Tags = typeof tags[number];
