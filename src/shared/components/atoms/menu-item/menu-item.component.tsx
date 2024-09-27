import * as React from 'react';

import _ from 'lodash';

import { MenuItem as CKMenuItem } from '@chakra-ui/react';

import { MenuItemProps } from '@types';

const MenuItem: React.FC<MenuItemProps> = ({
    children,
    ...props
}) => {

  return (
    <CKMenuItem
    {...props}
    >
      {children}
    </CKMenuItem>
  );
}

export default React.memo(MenuItem, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});