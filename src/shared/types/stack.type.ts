
export type StackDirection = 'row' | 'column'

export interface StackProps {
    spacing?: number;
    align?: string;
    divider?: boolean;
    direction?: StackDirection;
}