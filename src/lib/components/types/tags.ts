const tags = ['button', 'div'] as const;

export type Tags = typeof tags[number];
