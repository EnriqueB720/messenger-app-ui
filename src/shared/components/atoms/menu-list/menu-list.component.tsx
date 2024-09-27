import * as React from 'react';

import _ from 'lodash';

import { MenuList as CKMenuList } from '@chakra-ui/react';

import { MenuListProps } from '@types';

const MenuList: React.FC<MenuListProps> = ({
    children,
    ...props
}) => {

  return (
    <CKMenuList
    {...props}
    >
      {children}
    </CKMenuList>
  );
}

export default React.memo(MenuList, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});