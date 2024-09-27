import * as React from 'react';

import _ from 'lodash';

import { Menu as CKMenu } from '@chakra-ui/react';

import { MenuProps } from '@types';

const Menu: React.FC<MenuProps> = ({
    children
}) => {

  return (
    <CKMenu
    >
      {children}
    </CKMenu>
  );
}

export default React.memo(Menu, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});