export const TextStyle = {
    regular: 'regular',
    medium: 'medium',
    bold: 'bold'
} as const;

export type TextStyle = typeof TextStyle[keyof typeof TextStyle];