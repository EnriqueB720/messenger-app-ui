import { MenuListProps as MenuListProperties } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface MenuListProps extends MenuListProperties{
    children?: ReactNode;
}